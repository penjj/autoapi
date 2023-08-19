/* eslint-disable */

/**
 * This file was auto generated by `autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the autoapi cli.
 */
import { api, type Config, type Api } from 'autoapi'
import {
  UnnamedModel
} from './models/undefined.d'

/**
 * GitHub API Root
Get Hypermedia links to resources accessible in GitHub's REST API
 */
export const get = api<(config?: Config<any, any>) => UnnamedModel>`GET /`

export type Get = Api<typeof get>
