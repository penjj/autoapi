import { type Apis, parse } from './parse'
import { createApi, createModel } from './writer'
import { Config } from './types'

import { get } from 'node:http'
import { get as get2 } from 'node:https'
import fs from 'node:fs/promises'
import { resolve, relative } from 'node:path'

/**
 * 发起http请求，获取 openapi 的json配置文件
 */
export async function resolveSchema(url: string) {
  return new Promise<any>((resolve, reject) => {
    ;(url.startsWith('https:') ? get2 : get)(url, res => {
      let data = ''
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data)
          resolve(jsonData as any)
        } catch (err: any) {
          reject('Invalid JSON format: ' + err.message)
        }
      })
    }).on('error', err => {
      reject('Request error:' + err.message)
    })
  })
}

/**
 * 使用解析的配置生成文件
 */
export async function writeAutoapi(
  fileGroups: Apis[],
  config: Required<Config>
) {
  const genDir = resolve(process.cwd(), config.generateDir)

  await fs.mkdir(genDir, { recursive: true })
  await fs.mkdir(config.modelDir, { recursive: true })
  for (const file of fileGroups) {
    const modelName = `${file.filename}.d`
    file.modelPath = `./${relative(genDir, config.modelDir)}/${modelName}`
    await fs.writeFile(
      resolve(process.cwd(), genDir, `${file.filename}.ts`),
      createApi(file)
    )
    if (file.deps.length) {
      await fs.writeFile(
        resolve(process.cwd(), config.modelDir, `${modelName}.ts`),
        createModel(file)
      )
    }
  }
}

/**
 * 默认的配置项
 */
const defaultConfig: Partial<Config> = {
  generateDir: 'src/api',
  modelDir: 'src/api/models',
}

/**
 * 主入口，解析
 */
export async function createAutoapi(config: Config) {
  config = Object.assign(defaultConfig, config)
  const schema = await resolveSchema(config.openapiUrl)

  if (!schema.openapi && !schema.swagger) {
    throw new Error(
      config.openapiUrl +
        ' is not a correct openapi JSON specification, please check and try again'
    )
  }

  const result = parse(schema)
  writeAutoapi(result, config as Required<Config>)
}
