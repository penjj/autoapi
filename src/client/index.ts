export * from './errors'
export { api, useBridge, type RequestHandler, type Config } from './bridge'

type Fn = (...args: any[]) => any

/**
 * 获取 api 的所有类型
 * 因为生成代码的 bean 名字是不确定且是不固定的，但是api名字是固定的。所以需要使用这个类型工具来获取返回值类型
 *
 * @example
 * const getUser = api<(config?: { query: boolean, body: string }) => Promise<number>>`get /user`
 * type GetUserApi = Api<typeof getUser>
 * type GetUserQuery = GetUserApi['query'] // boolean
 * type GetUserBody = GetUserApi['body'] // string
 * type GetUserResult = GetUserApi['result'] // number
 */
export type Api<T extends Fn> = {
  query: Query<T>
  body: Body<T>
  result: Ret<T>
}

/**
 * 获取api返回值类型, 如果返回类型是 promise, 会自动进行解包
 * @example
 * const getUser = api<(config?: { query: boolean, body: string }) => Promise<number>>`get /user`
 * type GetUserResult = Ret<typeof getUser> // number
 */
export type Ret<T extends Fn, R = ReturnType<T>> = R extends Promise<infer V>
  ? V
  : R

/**
 * 获取api参数类型
 * @example
 * const getUser = api<(config?: { query: boolean, body: string }) => Promise<number>>`get /user`
 * type GetUserQuery = Query<typeof getUser> // boolean
 */
export type Query<T extends Fn, L = LastArg<T>> = L extends {
  query: infer V
}
  ? V
  : never

/**
 * 获取api body 类型
 * @example
 * const getUser = api<(config?: { query: boolean, body: string }) => Promise<number>>`get /user`
 * type GetUserBody = Body<typeof getUser> // string
 */
export type Body<T extends Fn, L = LastArg<T>> = L extends {
  body: infer V
}
  ? V
  : never

/**
 * 获取函数最后一个参数类型
 */
type LastArg<T extends Fn> = Last<Parameters<T>>

type Tail<T extends any[]> = ((...t: T) => void) extends (
  h: any,
  ...r: infer R
) => void
  ? R
  : never

type Last<T extends any[]> = T[Exclude<keyof T, keyof Tail<T>>]
