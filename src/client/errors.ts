/**
 * 开发环境下的错误类型，如参数不匹配等
 */
export class DevNetError extends Error {
  readonly isDev = true

  constructor(message: string) {
    super(message)
  }
}

/**
 * 检测是不是开发环境下的错误类型
 */
export function isDevNetError(err: any): err is DevNetError {
  return err instanceof DevNetError
}
