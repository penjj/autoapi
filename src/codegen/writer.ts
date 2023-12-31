import type { Apis } from './parse'
import { upperFirst } from './name'

export const fixedHeader = `/* eslint-disable */
// @ts-nocheck

/**
 * This file was auto generated by \`ts-autoapi\`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the ts-autoapi cli.
 */
`

export function createFileHeader() {
  return fixedHeader
}

export function createModel(apis: Apis) {
  const ret: string[] = [fixedHeader]

  for (const model of apis.deps) {
    ret.push('\n')
    // 插入描述
    if (model.description) {
      ret.push(`/**\n * ${model.description}\n */\n`)
    }
    if (!model.pairs) {
      ret.push(`export type ${model.name} = any`)
      continue
    }
    ret.push(`export interface ${model.name} {\n`)
    for (const pair of model.pairs) {
      // 插入描述
      if (pair.description) {
        ret.push(`  /**\n   * ${pair.description}\n   */\n`)
      }

      ret.push(`  ${pair.name}${pair.required ? '' : '?'}: ${pair.type}\n\n`)
    }
    ret.push(`}\n`)
  }
  return ret.join('')
}

export function createApi(apis: Apis) {
  const ret: string[] = []

  for (const api of apis.apis) {
    ret.push('\n')
    // 插入描述
    if (api.description) {
      ret.push(`/**\n * ${api.description}\n */\n`)
    }
    // 插入函数
    ret.push(`export const ${api.name} = api<(`)
    if (api.pathQuery.length) {
      if (api.pathQuery.length > 1) {
        const paths = api.pathQuery.map(item => item.name + ': ' + item.type)
        ret.push(`paths?: [${paths.join(', ')}], `)
      } else {
        ret.push(`paths?: ${api.pathQuery[0].type}, `)
      }
    }
    if (api.query) {
      ret.push(`query?: ${api.query}, `)
    }
    if (api.body) {
      ret.push(`body?: ${api.body}, `)
    }
    ret.push(
      `config?: Config<${api.query || 'any'}, ${api.body || 'any'}>) => `
    )
    ret.push(
      `${api.response || 'any'}>\`${api.method.toUpperCase()} ${api.url}\`\n`
    )
    ret.push(
      `\nexport type ${upperFirst(api.name)} = Api<typeof ${api.name}>\n`
    )
  }

  const text = ret.join('')

  const deps = apis.deps
    .map(item => item.name)
    .filter(dep => dep != null && text.includes(dep))

  if (deps.length) {
    ret.unshift(
      `import type {\n  ${deps.join(',\n  ')}\n} from '${apis.modelPath}'\n`
    )
  }
  ret.unshift(`import { api, type Config, type Api } from 'ts-autoapi'\n`)
  ret.unshift(fixedHeader)

  return ret.join('')
}
