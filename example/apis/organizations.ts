/* eslint-disable */

/**
 * This file was auto generated by `autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the autoapi cli.
 */
import { api, type Config, type Api } from 'autoapi'
import {
  GetQuery
} from './models/organizations.d'

/**
 * List organizations
Lists all organizations, in the order that they were created on GitHub Enterprise Server.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
 */
export const get = api<(query?: GetQuery, config?: Config<GetQuery, any>) => any[]>`GET /organizations`

export type Get = Api<typeof get>
