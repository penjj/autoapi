export interface Config {
  /**
   * openapi json文档地址
   */
  openapiUrl: string
  /**
   * 生成文件存放位置
   * e.g. src/services/gen
   */
  generateDir?: string
  /**
   * model 文件存放路径
   * e.g. src/services/gen/models
   */
  modelDir?: string
  /**
   * make or transform your api name
   */
  createApiName?(method: string, path: string): string
}
