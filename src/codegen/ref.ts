import type { OpenAPIV2, OpenAPIV3 } from 'openapi-types'

// 判断是不是 openapi ref 类型的对象
export function isRef(refLike: any): refLike is OpenAPIV3.ReferenceObject {
  return typeof refLike?.$ref === 'string'
}

export type ResolveRef = ReturnType<typeof refResolver>

type RefObject<T> = T & { __ref: string }

/**
 * 创建一个ref解析器
 *
 * openapi 是符合 json schema 规范的一种接口描述配置, 内部通过 $ref: '#/xxx/xxx' 来对
 * 描述配置进行引用，openapi内部大量使用了ref,所以需要使用refResolver 来对配置项进行引用
 *
 * 此方法功能如下：
 * @example
 * const schema = {
 *  define: {
 *    Response: {
 *      type: 'string'
 *    }
 *  }
 * }
 *
 * const resolveRef = refResolver(schema)
 *
 * // 解析结果
 * resolveRef('#/define/Response') // { type: 'string' }
 *
 */
export function refResolver(base: OpenAPIV3.Document | OpenAPIV2.Document) {
  return <T>(ref: string): RefObject<T> | undefined => {
    const paths = ref.split('/').splice(1)
    let ret: any
    if (paths.length) {
      ret = base
    }
    while (paths.length) {
      ret = ret[paths.shift() as keyof OpenAPIV3.Document]
    }
    if (ret) {
      // 因为 parser 内部会把普通对象和解析的对象放进一个对象池中，所以这里给一个标识，以区分是不是解析出来对象
      ret.__ref = ref
    }
    return ret as RefObject<T>
  }
}
