/* eslint-disable */

/**
 * This file was auto generated by `ts-autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the ts-autoapi cli.
 */

export interface UnnamedModel {
  /**
   * The Markdown text to render in HTML.
   */
  text?: string

  /**
   * The rendering mode. Can be either `markdown` or `gfm`.
   */
  mode?: string

  /**
   * The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.
   */
  context?: string

}
