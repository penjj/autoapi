/* eslint-disable */

/**
 * This file was auto generated by `ts-autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the ts-autoapi cli.
 */

export interface Actions_enterprise_permissions {
  /**
   * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
   */
  enabled_organizations?: string

  /**
   * The API URL to use to get or set the selected organizations that are allowed to run GitHub Actions, when `enabled_organizations` is set to `selected`.
   */
  selected_organizations_url?: string

  /**
   * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
   */
  allowed_actions?: string

  /**
   * The API URL to use to get or set the actions that are allowed to run, when `allowed_actions` is set to `selected`.
   */
  selected_actions_url?: string

}

export interface UnnamedModel {
  enabled_organizations?: any

  allowed_actions?: any

}

export interface GetByEnterpriseActionsPermissionsOrganizationsQuery {
  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

/**
 * Organization Simple
 */
export interface Organization_simple {
  login?: string

  id?: number

  node_id?: string

  url?: string

  repos_url?: string

  events_url?: string

  hooks_url?: string

  issues_url?: string

  members_url?: string

  public_members_url?: string

  avatar_url?: string

  description?: string | null

}

export interface UnnamedModel$1 {
  total_count?: number

  /**
   * Organization Simple
   */
  organizations?: Organization_simple[]

}

export interface UnnamedModel$2 {
  /**
   * Unique identifier of the organization.
   */
  selected_organization_ids?: number[]

}

export interface Selected_actions {
  /**
   * Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
   */
  github_owned_allowed?: boolean

  patterns_allowed?: string[]

}

export interface GetByEnterpriseActionsRunnerGroupsQuery {
  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface Runner_groups_enterprise {
  id?: number

  name?: string

  visibility?: string

  default?: boolean

  selected_organizations_url?: string

  runners_url?: string

  allows_public_repositories?: boolean

}

export interface UnnamedModel$3 {
  total_count?: number

  runner_groups?: Runner_groups_enterprise[]

}

export interface UnnamedModel$4 {
  /**
   * Name of the runner group.
   */
  name?: string

  /**
   * Visibility of a runner group. You can select all organizations or select individual organization. Can be one of: `all` or `selected`
   */
  visibility?: string

  /**
   * Unique identifier of the organization.
   */
  selected_organization_ids?: number[]

  /**
   * Unique identifier of the runner.
   */
  runners?: number[]

  /**
   * Whether the runner group can be used by `public` repositories.
   */
  allows_public_repositories?: boolean

}

export interface UnnamedModel$5 {
  /**
   * Name of the runner group.
   */
  name?: string

  /**
   * Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`
   */
  visibility?: string

  /**
   * Whether the runner group can be used by `public` repositories.
   */
  allows_public_repositories?: boolean

}

export interface GetByEnterpriseActionsRunnerGroupsAndRunnerGroupIdOrganizationsQuery {
  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel$6 {
  total_count?: number

  organizations?: any[]

}

export interface UnnamedModel$7 {
  /**
   * Unique identifier of the organization.
   */
  selected_organization_ids?: number[]

}

export interface GetByEnterpriseActionsRunnerGroupsAndRunnerGroupIdRunnersQuery {
  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

/**
 * A label for a self hosted runner
 */
export interface Runner_label {
  /**
   * Unique identifier of the label.
   */
  id?: number

  /**
   * Name of the label.
   */
  name?: string

  /**
   * The type of label. Read-only labels are applied automatically when the runner is configured.
   */
  type?: string

}

/**
 * A self hosted runner
 */
export interface Runner {
  /**
   * The id of the runner.
   */
  id?: number

  /**
   * The name of the runner.
   */
  name?: string

  /**
   * The Operating System of the runner.
   */
  os?: string

  /**
   * The status of the runner.
   */
  status?: string

  busy?: boolean

  /**
   * A label for a self hosted runner
   */
  labels?: Runner_label[]

}

export interface UnnamedModel$8 {
  total_count?: number

  /**
   * A self hosted runner
   */
  runners?: Runner[]

}

export interface UnnamedModel$9 {
  /**
   * Unique identifier of the runner.
   */
  runners?: number[]

}

export interface GetByEnterpriseActionsRunnersQuery {
  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel$10 {
  total_count?: number

  runners?: any[]

}

/**
 * Runner Application
 */
export interface Runner_application {
  os?: string

  architecture?: string

  download_url?: string

  filename?: string

  /**
   * A short lived bearer token used to download the runner, if needed.
   */
  temp_download_token?: string

  sha256_checksum?: string

}
