/* eslint-disable */

/**
 * This file was auto generated by `ts-autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the ts-autoapi cli.
 */

export interface GetCodeQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/articles/searching-code/)" for a detailed list of qualifiers.
   */
  q?: string

  /**
   * Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub Enterprise Server search infrastructure. Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel {
  text?: string

  indices?: number[]

}

export interface UnnamedModel$1 {
  object_url?: string

  object_type?: string | null

  property?: string

  fragment?: string

  matches?: UnnamedModel[]

}

/**
 * Code Search Result Item
 */
export interface Code_search_result_item {
  name?: string

  path?: string

  sha?: string

  url?: string

  git_url?: string

  html_url?: string

  repository?: any

  score?: number

  file_size?: number

  language?: string | null

  last_modified_at?: string

  line_numbers?: string[]

  text_matches?: UnnamedModel$1[]

}

export interface UnnamedModel$2 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Code Search Result Item
   */
  items?: Code_search_result_item[]

}

export interface GetCommitsQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query). See "[Searching commits](https://docs.github.com/articles/searching-commits/)" for a detailed list of qualifiers.
   */
  q?: string

  /**
   * Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel$3 {
  name?: string

  email?: string

  date?: string

}

export interface UnnamedModel$4 {
  sha?: string

  url?: string

}

export interface UnnamedModel$5 {
  author?: UnnamedModel$3

  committer?: any

  comment_count?: number

  message?: string

  tree?: UnnamedModel$4

  url?: string

  verification?: any

}

export interface UnnamedModel$6 {
  url?: string

  html_url?: string

  sha?: string

}

/**
 * Commit Search Result Item
 */
export interface Commit_search_result_item {
  url?: string

  sha?: string

  html_url?: string

  comments_url?: string

  commit?: UnnamedModel$5

  author?: any

  committer?: any

  parents?: UnnamedModel$6[]

  repository?: any

  score?: number

  node_id?: string

  text_matches?: any

}

export interface UnnamedModel$7 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Commit Search Result Item
   */
  items?: Commit_search_result_item[]

}

export interface GetIssuesQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.
   */
  q?: string

  /**
   * Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel$8 {
  id?: number

  node_id?: string

  url?: string

  name?: string

  color?: string

  default?: boolean

  description?: string | null

}

export interface UnnamedModel$9 {
  merged_at?: string | null

  diff_url?: string | null

  html_url?: string | null

  patch_url?: string | null

  url?: string | null

}

/**
 * Issue Search Result Item
 */
export interface Issue_search_result_item {
  url?: string

  repository_url?: string

  labels_url?: string

  comments_url?: string

  events_url?: string

  html_url?: string

  id?: number

  node_id?: string

  number?: number

  title?: string

  locked?: boolean

  active_lock_reason?: string | null

  assignees?: any[] | null

  user?: any

  labels?: UnnamedModel$8[]

  state?: string

  assignee?: any

  milestone?: any

  comments?: number

  created_at?: string

  updated_at?: string

  closed_at?: string | null

  text_matches?: any

  pull_request?: UnnamedModel$9

  body?: string

  score?: number

  author_association?: any

  draft?: boolean

  repository?: any

  body_html?: string

  body_text?: string

  timeline_url?: string

  performed_via_github_app?: any

  reactions?: any

}

export interface UnnamedModel$10 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Issue Search Result Item
   */
  items?: Issue_search_result_item[]

}

export interface GetLabelsQuery {
  /**
   * The id of the repository.
   */
  repositoryid?: number

  /**
   * The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query).
   */
  q?: string

  /**
   * Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

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
 * Label Search Result Item
 */
export interface Label_search_result_item {
  id?: number

  node_id?: string

  url?: string

  name?: string

  color?: string

  default?: boolean

  description?: string | null

  score?: number

  text_matches?: any

}

export interface UnnamedModel$11 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Label Search Result Item
   */
  items?: Label_search_result_item[]

}

export interface GetRepositoriesQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
   */
  q?: string

  /**
   * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

  /**
   * Results per page (max 100)
   */
  perpage?: number

  /**
   * Page number of the results to fetch.
   */
  page?: number

}

export interface UnnamedModel$12 {
  admin?: boolean

  maintain?: boolean

  push?: boolean

  triage?: boolean

  pull?: boolean

}

/**
 * Repo Search Result Item
 */
export interface Repo_search_result_item {
  id?: number

  node_id?: string

  name?: string

  full_name?: string

  owner?: any

  private?: boolean

  html_url?: string

  description?: string | null

  fork?: boolean

  url?: string

  created_at?: string

  updated_at?: string

  pushed_at?: string

  homepage?: string | null

  size?: number

  stargazers_count?: number

  watchers_count?: number

  language?: string | null

  forks_count?: number

  open_issues_count?: number

  master_branch?: string

  default_branch?: string

  score?: number

  forks_url?: string

  keys_url?: string

  collaborators_url?: string

  teams_url?: string

  hooks_url?: string

  issue_events_url?: string

  events_url?: string

  assignees_url?: string

  branches_url?: string

  tags_url?: string

  blobs_url?: string

  git_tags_url?: string

  git_refs_url?: string

  trees_url?: string

  statuses_url?: string

  languages_url?: string

  stargazers_url?: string

  contributors_url?: string

  subscribers_url?: string

  subscription_url?: string

  commits_url?: string

  git_commits_url?: string

  comments_url?: string

  issue_comment_url?: string

  contents_url?: string

  compare_url?: string

  merges_url?: string

  archive_url?: string

  downloads_url?: string

  issues_url?: string

  pulls_url?: string

  milestones_url?: string

  notifications_url?: string

  labels_url?: string

  releases_url?: string

  deployments_url?: string

  git_url?: string

  ssh_url?: string

  clone_url?: string

  svn_url?: string

  forks?: number

  open_issues?: number

  watchers?: number

  topics?: string[]

  mirror_url?: string | null

  has_issues?: boolean

  has_projects?: boolean

  has_pages?: boolean

  has_wiki?: boolean

  has_downloads?: boolean

  archived?: boolean

  /**
   * Returns whether or not this repository disabled.
   */
  disabled?: boolean

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string

  license?: any

  permissions?: UnnamedModel$12

  text_matches?: any

  temp_clone_token?: string

  allow_merge_commit?: boolean

  allow_squash_merge?: boolean

  allow_rebase_merge?: boolean

  delete_branch_on_merge?: boolean

  allow_forking?: boolean

  is_template?: boolean

}

export interface UnnamedModel$13 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Repo Search Result Item
   */
  items?: Repo_search_result_item[]

}

export interface GetTopicsQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query).
   */
  q?: string

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
 * Topic Search Result Item
 */
export interface Topic_search_result_item {
  name?: string

  display_name?: string | null

  short_description?: string | null

  description?: string | null

  created_by?: string | null

  released?: string | null

  created_at?: string

  updated_at?: string

  featured?: boolean

  curated?: boolean

  score?: number

  repository_count?: number | null

  logo_url?: string | null

  text_matches?: any

  related?: any[] | null

  aliases?: any[] | null

}

export interface UnnamedModel$14 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * Topic Search Result Item
   */
  items?: Topic_search_result_item[]

}

export interface GetUsersQuery {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.0/rest/reference/search#constructing-a-search-query). See "[Searching users](https://docs.github.com/articles/searching-users/)" for a detailed list of qualifiers.
   */
  q?: string

  /**
   * Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub Enterprise Server. Default: [best match](https://docs.github.com/enterprise-server@3.0/rest/reference/search#ranking-search-results)
   */
  sort?: string

  /**
   * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
   */
  order?: string

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
 * User Search Result Item
 */
export interface User_search_result_item {
  login?: string

  id?: number

  node_id?: string

  avatar_url?: string

  gravatar_id?: string | null

  url?: string

  html_url?: string

  followers_url?: string

  subscriptions_url?: string

  organizations_url?: string

  repos_url?: string

  received_events_url?: string

  type?: string

  score?: number

  following_url?: string

  gists_url?: string

  starred_url?: string

  events_url?: string

  public_repos?: number

  public_gists?: number

  followers?: number

  following?: number

  created_at?: string

  updated_at?: string

  name?: string | null

  bio?: string | null

  email?: string | null

  location?: string | null

  site_admin?: boolean

  hireable?: boolean | null

  text_matches?: any

  blog?: string | null

  company?: string | null

  suspended_at?: string | null

}

export interface UnnamedModel$15 {
  total_count?: number

  incomplete_results?: boolean

  /**
   * User Search Result Item
   */
  items?: User_search_result_item[]

}
