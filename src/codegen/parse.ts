import { OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { createApiName, uniqueNameFactory, upperFirst } from './name'
import { ResolveRef, isRef, refResolver } from './ref'
import { type Config } from '../codegen/types'

/**
 * 取出接口的最前面一截，用来做为接口分组名
 */
export function getGroup(path: string) {
  return path.split('/').filter(Boolean)[0]
}

/**
 * 接口的除去最前面一截的部分
 *
 * 为了简化接口名，内部将接口按最前面一截进行了分组（以文件形式），所以方法名不需要包含最前面一截
 *
 * @example
 * getUnGroupedPath('/api/v1/user') // => '/v1/user'
 *
 * // api.ts
 * export function getUser() {
 *   return request.get('/api/user') // 实际方法名中还是会有最前面一截，只有方法名会简化
 * }
 *
 * 此正则将 /api/user api/user /user 都转换成 /user
 */
export function getUnGroupedPath(path: string): string {
  return (/\/?[^\/]+(.*)$/.exec(path)?.[1] as string) || ''
}

type Operation = OpenAPIV3.OperationObject & {
  method: string
  path: string
  group: string
}
/**
 * 将openapi的层级结构转换成扁平结构
 */
export function getOperations(schema: any): Operation[] {
  const apis: Operation[] = []
  for (const [path, configure] of Object.entries(schema.paths)) {
    for (const [method, operation] of Object.entries(configure ?? {})) {
      apis.push({ ...(operation as any), method, path, group: getGroup(path) })
    }
  }
  return apis
}

/**
 * 把接口按组来存储
 */
export function getOperationGroup(apis: Operation[]) {
  const groups: Record<string, Operation[]> = {}

  for (const api of apis) {
    groups[api.group] ??= []
    groups[api.group].push(api)
  }

  return groups
}

let resolveRef: ResolveRef

// 保存对所有接口名字的引用，防止重复
let createModelName: ReturnType<typeof uniqueNameFactory>

/**
 * 根据接口来解析出接口配置
 */
export function parse(schema: any, config: Partial<Config> = {}) {
  resolveRef = refResolver(schema)
  const operations = getOperations(schema)
  const groups = getOperationGroup(operations)

  return Object.entries(groups).map(([group, operations]) => {
    createModelName = uniqueNameFactory()
    return generateApis(operations, {
      filename: group,
      ...config,
    })
  })
}

interface GenerateConfig extends Partial<Config> {
  filename: string
}

const TYPES = {
  array: 'any[]',
  object: 'any',
  integer: 'number',
  string: 'string',
  number: 'number',
  boolean: 'boolean',
}
/**
 * 对一些特殊类型转换成ts支持的类型
 */
export function formatNormalType(type: string | string[] | undefined): string {
  // 如果有多个类型，直接换成成联合类型
  if (Array.isArray(type)) {
    return type.map(formatNormalType).join(' | ')
  }

  return TYPES[type as keyof typeof TYPES] ?? type ?? 'unknown'
}

/**
 * 将 url 中的 {id} 这种参数转换成 ${id}，方便后面使用模板字符串
 */
export function normalizeUrl(path: string) {
  return path.replaceAll(/{/g, '${')
}

interface Struct {
  name?: string
  description?: string
  pairs?: Pair[]
}

interface Pair {
  name: string
  description?: string
  required?: boolean
  type: string
}

type SchemaObject =
  | OpenAPIV3.SchemaObject
  | OpenAPIV3.ReferenceObject
  | undefined

export function resolveModelName(
  ref: string | undefined,
  createModelName: (name: string) => string
) {
  if (ref) {
    const refName = ref.split('/').pop()
    // 不能包含中文，因为不太好命名
    if (refName && !/[\u4e00-\u9fa5]/.test(refName)) {
      const modelName = refName.replaceAll(/[^a-zA-Z0-9_$]/g, '_')
      return upperFirst(modelName)
    }
  }

  return createModelName('UnnamedModel')
}

interface ResolveSchemaResult {
  type: string
  deps: Record<string, Struct>
  description?: string
}

export function parseObjectPaths(paths: Pair[]) {
  return paths.reduce((result, item) => {
    const keys = item.name.split('.')
    let obj: any = result
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const isArrayIndex = /\[\d+\]/.test(key)
      if (isArrayIndex) {
        const arrayKey = key.replace(/\[[0-9]+\]/, '')
        const index = key.match(/[0-9]+/)![0]
        obj[arrayKey] = obj[arrayKey] || []
        obj = obj[arrayKey][index] = obj[arrayKey][index] || {}
      } else {
        if (i === keys.length - 1) {
          obj[key] = item.type
        } else {
          obj[key] = obj[key] || {}
          obj = obj[key]
        }
      }
    }
    return result
  }, {})
}

const filling: string[] = []

/**
 * 将openapi 描述解析成能转换成 ts interface的格式
 */
export function resolveSchema(
  schema: SchemaObject,
  deps: Record<string, Struct> = {}
): ResolveSchemaResult {
  if (!schema) {
    return { type: 'unknown', deps }
  }
  const originRef: string | undefined = (schema as any).__ref
  if (isRef(schema)) {
    schema.$ref = decodeURIComponent(schema.$ref)
    const modelIdentifier = resolveModelName(schema.$ref, createModelName)
    // 阻止嵌套依赖导致的死循环
    if (!deps[modelIdentifier] && !filling.includes(schema.$ref)) {
      filling.push(schema.$ref)
      return resolveSchema(resolveRef(schema.$ref), deps)
    }
    return { type: 'any', deps }
  }

  if (!schema.type) {
    return {
      type: 'any',
      description: schema.description,
      deps,
    }
  }

  if (schema.type === 'array') {
    const { type, ...configure } = resolveSchema(schema.items, deps)
    return { type: type + '[]', ...configure }
  }

  if (schema.type === 'object') {
    const properties = Object.entries(schema.properties || {})
    const pairs = properties.map<Pair>(([key, value]) => {
      const { type, description } = resolveSchema(value, deps)
      return {
        name: key.trim() || '[key: string]',
        description: description?.trim(),
        type,
      }
    })

    if (pairs.length) {
      const modelIdentifier = resolveModelName(originRef, createModelName)
      deps[modelIdentifier] = {
        name: modelIdentifier,
        description: schema.description,
        pairs,
      }

      return {
        type: modelIdentifier,
        description: schema.description,
        deps,
      }
    }

    return {
      type: 'Record<string, any>',
      description: schema.description,
      deps,
    }
  }

  return {
    type: formatNormalType(schema.type),
    description: schema.description,
    deps,
  }
}

interface ResolveParamResult {
  path: Pair[]
  query: Pair[]
  body: Pair[]
  deps: Struct[]
}

/**
 * 解析参数
 */
export function resolveParams(
  parameters: (OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject)[] = []
) {
  const ret: ResolveParamResult = {
    path: [],
    query: [],
    body: [],
    deps: [],
  }
  const objectPathPairs: Pair[] = []

  parameters?.forEach(item => {
    let parameter = item as OpenAPIV3.ParameterObject
    if (isRef(item)) {
      parameter = resolveRef(item.$ref) as OpenAPIV3.ParameterObject
    }
    // in header 类型参数暂未解析
    // 已下三种类型的参数会分类存放
    if (['path', 'query', 'body'].includes(parameter.in)) {
      const { type, deps: paramsDeps } = resolveSchema(
        parameter.schema ?? (parameter as any)
      )
      if (/\./.test(parameter.name)) {
        objectPathPairs.push({
          name: parameter.name,
          type,
        })
        return
      }
      const paramType = parameter.in as keyof typeof ret
      if (
        (ret[paramType] as Pair[]).every(item => item.name !== parameter.name)
      ) {
        ret[paramType].push({
          name: formatParameterKey(parameter.name, parameter.in as any),
          required: !parameter.name?.trim(),
          description: parameter.description,
          type,
        })
      }
      ret.deps.push(...Object.values(paramsDeps))
    }
  })

  // 有些参数是 `a.b` 形式，这里会给他解析成行内 interface
  // a.b: number => a: {b: number}
  // a[0].b: number => a: [{ b: number }]
  if (objectPathPairs.length) {
    const inlinePairs = parseObjectPaths(objectPathPairs)
    Object.entries(inlinePairs).forEach(([key, struct]) => {
      ret.query.push({
        name: key,
        type: JSON.stringify(struct, null, 2).replaceAll('"', ''),
      })
    })
  }

  return ret
}

export function formatParameterKey(
  key: string | undefined,
  area: 'path' | 'query' | 'body'
) {
  if (area === 'path') {
    if (!key) {
      return 'unnamed'
    }
    return key.replaceAll(/[^a-zA-Z0-9]/g, '')
  } else {
    return key?.replaceAll(/[^a-zA-Z0-9]/g, '') || '[key: string]'
  }
}

/**
 * 解析请求体类型
 */
export function resolveRequestBody(
  requestBody: OpenAPIV3.RequestBodyObject | OpenAPIV3.ReferenceObject
): ResolveSchemaResult | void {
  // requestBody 只存在 openapi3 规范中
  if (isRef(requestBody)) {
    requestBody = resolveRef(requestBody.$ref) as OpenAPIV3.RequestBodyObject
  }

  let jsonBody: OpenAPIV3.MediaTypeObject
  if ((jsonBody = requestBody.content['application/json'])) {
    return resolveSchema(jsonBody.schema)
  }
}

/**
 * 解析响应体
 */
export function resolveResponse(
  response: OpenAPIV3.ResponseObject | OpenAPIV3.ReferenceObject | undefined
): ResolveSchemaResult | void {
  if (isRef(response)) {
    response = resolveRef<OpenAPIV3.ResponseObject>(response.$ref)
  }

  let v2Schema: any
  // openapi v2 规范会有 schema 字段，如果有这个字段，就当成v2来解析
  if ((v2Schema = (response as OpenAPIV2.ResponseObject).schema)) {
    return resolveSchema(v2Schema)
  }

  // openapi v3 会放到 content 下面，因为一般只会有 application/json 类型的数据需要解析
  // 所以其他类型的并没有处理
  let jsonResponse: OpenAPIV3.MediaTypeObject
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  if ((jsonResponse = response?.content?.['application/json']!)) {
    return resolveSchema(jsonResponse.schema)
  }
}

interface Api {
  url: string
  method: string
  name: string
  pathQuery: Pair[]
  query?: string
  body?: string
  response?: string
  description?: string
}

export interface Apis {
  apis: Api[]
  deps: Struct[]
  filename: string
  modelPath?: string
}

/**
 * 生成单个分组内的 api 配置
 */
export function generateApis(
  operations: Operation[],
  config: GenerateConfig
): Apis {
  const makeUnique = uniqueNameFactory()
  config.createApiName ??= createApiName

  const apis: Api[] = []
  const deps: Struct[] = []

  operations.forEach(operation => {
    const unGroupedPath = getUnGroupedPath(operation.path)
    const name = makeUnique(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config.createApiName!(operation.method, unGroupedPath)
    )
    const apiScopeName = upperFirst(name)
    const api: Api = {
      name,
      url: operation.path,
      method: operation.method,
      pathQuery: [],
      description: [operation.summary, operation.description]
        .filter(Boolean)
        .join('\n'),
    }

    // url search params 和 url 带参 解析
    if (operation.parameters) {
      const {
        query,
        body,
        path,
        deps: paramDeps,
      } = resolveParams(operation.parameters)

      deps.push(...paramDeps)
      api.pathQuery = path
      if (query.length) {
        const name = apiScopeName + 'Query'
        deps.push({
          pairs: query,
          name,
        })

        api.query = name
      }

      // 请求体解析
      if (body.length) {
        api.body = body[0].type
        // TODO: 我所了解到的 openapi 规范中 parameters.body 和 requestBody 不会同时
        // 存在，如果发现这个错误，需要根据情况来重新处理
        if (operation.requestBody) {
          throw new Error('parameters.body 与 requestBody 同时存在')
        }
      }
    }

    // 请求体解析
    if (operation.requestBody) {
      const result = resolveRequestBody(operation.requestBody)
      if (result) {
        console.log(result)
        api.body = result.type
        deps.push(...Object.values(result.deps))
      }
    }

    // 响应解析
    if (operation.responses?.['200']) {
      const result = resolveResponse(operation.responses?.[200])
      api.response = result?.type
      if (result) {
        deps.push(...Object.values(result.deps))
      }
    }

    apis.push(api)
  })

  return {
    apis,
    deps,
    filename: config.filename,
  }
}
