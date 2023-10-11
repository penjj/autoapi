import { DevNetError } from './errors'

/**
 * 请求配置
 * 所有字段都会传入用户设置的 requestHandler 中
 */
export type Config<Query = any, Body = any> = {
  body: Body
  query: Query
  method: string
  url: string
  headers: any
  [key: string]: any
}

export type RequestHandler<R = any> = (config: Config) => Promise<R>

/**
 * 请求桥接器
 * 请求过程会通过桥接器来和用户代码进行桥接
 */
export class BridgeImpl {
  /**
   * 请求处理器，所有的请求都会经由此处
   */
  #handler?: RequestHandler

  /**
   * 设置请求处理器
   */
  setRequestHandler = <T>(handler: RequestHandler<T>) => {
    this.#handler = handler
  }

  /**
   * 发起请求, 调用用户设置的请求器
   */
  request = <T>(config: any) => {
    if (!this.#handler) {
      throw new DevNetError('Request handler is not set')
    }
    return this.#handler(config) as T
  }
}

let unsafetyBridge: BridgeImpl | null = null

/**
 * 获取唯一的http请求实例
 */
export function useBridge() {
  return unsafetyBridge || (unsafetyBridge = new BridgeImpl())
}

/**
 * 把url中的插槽和用户传递过来的参数进行替换
 */
export function buildUrl(originalUrl: string, pathValue: any | any[]) {
  const slots = originalUrl.match(/{\w+}/g)
  // 没有插槽就不需要替换
  if (!slots) {
    return originalUrl
  }

  // 单个数据进行数组转换
  if (!Array.isArray(pathValue)) {
    pathValue = [pathValue]
  }

  if (pathValue.length !== slots.length) {
    throw new DevNetError(
      `Args not match slots. args: ${pathValue.join(',')}, url: ${originalUrl}`
    )
  }

  if (pathValue.some((item: any) => item === undefined)) {
    throw new DevNetError(
      'Please check your args, `undefined` is not valid json data. args: ' +
        pathValue.join(',')
    )
  }

  let slot: any
  while ((slot = slots.shift())) {
    originalUrl = originalUrl.replace(slot, pathValue.shift())
  }
  return originalUrl
}

/**
 * 定义接口，返回一个可带详细类型的请求函数
 *
 * @example
 * const getUser = api<(id: string) => any>`GET /user/{id}`
 *
 * getUser(10)
 *  .then(res => console.log(res))
 */
export function api<T extends (...args: any[]) => any>(
  apiConfig: TemplateStringsArray
) {
  const [method, originalUrl] = apiConfig[0].split(' ')

  const request = (paths?: any, payload?: any, config?: any) => {
    // 如果没有插槽，paths 即 payload
    if (!/{\w+}/.test(originalUrl)) {
      payload = paths
      paths = undefined
    }
    useBridge().request<any>({
      method,
      url: buildUrl(originalUrl, paths),
      ...buildOptions(method, payload, config),
    })
  }

  request.raw = apiConfig[0]

  return request as unknown as {
    (...arg: Parameters<T>): Promise<ReturnType<T>>
    readonly raw: string
  }
}

const validFields = 'body|query|headers|url|method'.split('|')

/**
 * 判断是不是合法的request配置对象
 */
function isRequestConfig(obj: any) {
  return obj != null && validFields.some(item => obj[item] != null)
}

/**
 * 参数识别，因为有两个参数都可以作为配置项使用。
 *
 * 如果恰好遇到传递的参数中，有 body|query|headers, 一定得传config字段，否则无法正确识别
 * @example
 * getUser({query: 10}, {})
 */
export function buildOptions(method: string, payload: any, config: any) {
  if (!payload) {
    return config || {}
  }

  if (isRequestConfig(payload) && !config) {
    return payload
  }

  const isGet = method.toLocaleLowerCase() === 'get'
  config = { ...(config || {}) }
  if (isGet) {
    config.query = config.query || payload
  } else {
    config.body = config.body || payload
  }
  return config
}
