/* eslint-disable */

/**
 * This file was auto generated by `autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the autoapi cli.
 */
import { api, type Config, type Api } from 'autoapi'
import {
  GetRepositoriesQuery,
  UnnamedModel
} from './models/installation.d'

/**
 * List repositories accessible to the app installation
List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 */
export const getRepositories = api<(query?: GetRepositoriesQuery, config?: Config<GetRepositoriesQuery, any>) => UnnamedModel>`GET /installation/repositories`

export type GetRepositories = Api<typeof getRepositories>

/**
 * Revoke an installation access token
Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.0/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 */
export const deleteToken = api<(config?: Config<any, any>) => any>`DELETE /installation/token`

export type DeleteToken = Api<typeof deleteToken>
