/* eslint-disable */

/**
 * This file was auto generated by `autoapi`.
 * Do not make direct changes to the file.
 * If you need to make changes with openapi doc file,
 * please use the autoapi cli.
 */
import { api, type Config, type Api } from 'autoapi'
import {
  UnnamedModel,
  GetByTeamIdDiscussionsQuery,
  UnnamedModel$1,
  UnnamedModel$2,
  GetByTeamIdDiscussionsAndDiscussionNumberCommentsQuery,
  UnnamedModel$3,
  UnnamedModel$4,
  GetByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactionsQuery,
  UnnamedModel$5,
  GetByTeamIdDiscussionsAndDiscussionNumberReactionsQuery,
  UnnamedModel$6,
  GetByTeamIdMembersQuery,
  UnnamedModel$7,
  GetByTeamIdProjectsQuery,
  UnnamedModel$8,
  GetByTeamIdReposQuery,
  UnnamedModel$9,
  GetByTeamIdTeamsQuery
} from './models/teams.d'

/**
 * Get a team (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#get-a-team-by-name) endpoint.
 */
export const getByTeamId = api<(paths?: number, config?: Config<any, any>) => any>`GET /teams/{team_id}`

export type GetByTeamId = Api<typeof getByTeamId>

/**
 * Update a team (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
 */
export const patchByTeamId = api<(paths?: number, body?: UnnamedModel, config?: Config<any, UnnamedModel>) => any>`PATCH /teams/{team_id}`

export type PatchByTeamId = Api<typeof patchByTeamId>

/**
 * Delete a team (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 */
export const deleteByTeamId = api<(paths?: number, config?: Config<any, any>) => any>`DELETE /teams/{team_id}`

export type DeleteByTeamId = Api<typeof deleteByTeamId>

/**
 * List discussions (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussions = api<(paths?: number, query?: GetByTeamIdDiscussionsQuery, config?: Config<GetByTeamIdDiscussionsQuery, any>) => any[]>`GET /teams/{team_id}/discussions`

export type GetByTeamIdDiscussions = Api<typeof getByTeamIdDiscussions>

/**
 * Create a discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 */
export const postByTeamIdDiscussions = api<(paths?: number, body?: UnnamedModel$1, config?: Config<any, UnnamedModel$1>) => any>`POST /teams/{team_id}/discussions`

export type PostByTeamIdDiscussions = Api<typeof postByTeamIdDiscussions>

/**
 * Get a discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussionsAndDiscussionNumber = api<(paths?: [teamid: number, discussionnumber: number], config?: Config<any, any>) => any>`GET /teams/{team_id}/discussions/{discussion_number}`

export type GetByTeamIdDiscussionsAndDiscussionNumber = Api<typeof getByTeamIdDiscussionsAndDiscussionNumber>

/**
 * Update a discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const patchByTeamIdDiscussionsAndDiscussionNumber = api<(paths?: [teamid: number, discussionnumber: number], body?: UnnamedModel$2, config?: Config<any, UnnamedModel$2>) => any>`PATCH /teams/{team_id}/discussions/{discussion_number}`

export type PatchByTeamIdDiscussionsAndDiscussionNumber = Api<typeof patchByTeamIdDiscussionsAndDiscussionNumber>

/**
 * Delete a discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const deleteByTeamIdDiscussionsAndDiscussionNumber = api<(paths?: [teamid: number, discussionnumber: number], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/discussions/{discussion_number}`

export type DeleteByTeamIdDiscussionsAndDiscussionNumber = Api<typeof deleteByTeamIdDiscussionsAndDiscussionNumber>

/**
 * List discussion comments (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussionsAndDiscussionNumberComments = api<(paths?: [teamid: number, discussionnumber: number], query?: GetByTeamIdDiscussionsAndDiscussionNumberCommentsQuery, config?: Config<GetByTeamIdDiscussionsAndDiscussionNumberCommentsQuery, any>) => any[]>`GET /teams/{team_id}/discussions/{discussion_number}/comments`

export type GetByTeamIdDiscussionsAndDiscussionNumberComments = Api<typeof getByTeamIdDiscussionsAndDiscussionNumberComments>

/**
 * Create a discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 */
export const postByTeamIdDiscussionsAndDiscussionNumberComments = api<(paths?: [teamid: number, discussionnumber: number], body?: UnnamedModel$3, config?: Config<any, UnnamedModel$3>) => any>`POST /teams/{team_id}/discussions/{discussion_number}/comments`

export type PostByTeamIdDiscussionsAndDiscussionNumberComments = Api<typeof postByTeamIdDiscussionsAndDiscussionNumberComments>

/**
 * Get a discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = api<(paths?: [teamid: number, discussionnumber: number, commentnumber: number], config?: Config<any, any>) => any>`GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`

export type GetByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = Api<typeof getByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber>

/**
 * Update a discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const patchByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = api<(paths?: [teamid: number, discussionnumber: number, commentnumber: number], body?: UnnamedModel$4, config?: Config<any, UnnamedModel$4>) => any>`PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`

export type PatchByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = Api<typeof patchByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber>

/**
 * Delete a discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const deleteByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = api<(paths?: [teamid: number, discussionnumber: number, commentnumber: number], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`

export type DeleteByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber = Api<typeof deleteByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumber>

/**
 * List reactions for a team discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions = api<(paths?: [teamid: number, discussionnumber: number, commentnumber: number], query?: GetByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactionsQuery, config?: Config<GetByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactionsQuery, any>) => any[]>`GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions`

export type GetByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions = Api<typeof getByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions>

/**
 * Create reaction for a team discussion comment (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
 */
export const postByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions = api<(paths?: [teamid: number, discussionnumber: number, commentnumber: number], body?: UnnamedModel$5, config?: Config<any, UnnamedModel$5>) => any>`POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions`

export type PostByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions = Api<typeof postByTeamIdDiscussionsAndDiscussionNumberCommentsAndCommentNumberReactions>

/**
 * List reactions for a team discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export const getByTeamIdDiscussionsAndDiscussionNumberReactions = api<(paths?: [teamid: number, discussionnumber: number], query?: GetByTeamIdDiscussionsAndDiscussionNumberReactionsQuery, config?: Config<GetByTeamIdDiscussionsAndDiscussionNumberReactionsQuery, any>) => any[]>`GET /teams/{team_id}/discussions/{discussion_number}/reactions`

export type GetByTeamIdDiscussionsAndDiscussionNumberReactions = Api<typeof getByTeamIdDiscussionsAndDiscussionNumberReactions>

/**
 * Create reaction for a team discussion (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
 */
export const postByTeamIdDiscussionsAndDiscussionNumberReactions = api<(paths?: [teamid: number, discussionnumber: number], body?: UnnamedModel$6, config?: Config<any, UnnamedModel$6>) => any>`POST /teams/{team_id}/discussions/{discussion_number}/reactions`

export type PostByTeamIdDiscussionsAndDiscussionNumberReactions = Api<typeof postByTeamIdDiscussionsAndDiscussionNumberReactions>

/**
 * List team members (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-team-members) endpoint.

Team members will include the members of child teams.
 */
export const getByTeamIdMembers = api<(paths?: number, query?: GetByTeamIdMembersQuery, config?: Config<GetByTeamIdMembersQuery, any>) => any[]>`GET /teams/{team_id}/members`

export type GetByTeamIdMembers = Api<typeof getByTeamIdMembers>

/**
 * Get team member (Legacy)
The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.
 */
export const getByTeamIdMembersAndUsername = api<(paths?: [teamid: number, username: string], config?: Config<any, any>) => any>`GET /teams/{team_id}/members/{username}`

export type GetByTeamIdMembersAndUsername = Api<typeof getByTeamIdMembersAndUsername>

/**
 * Add team member (Legacy)
The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export const putByTeamIdMembersAndUsername = api<(paths?: [teamid: number, username: string], config?: Config<any, any>) => any>`PUT /teams/{team_id}/members/{username}`

export type PutByTeamIdMembersAndUsername = Api<typeof putByTeamIdMembersAndUsername>

/**
 * Remove team member (Legacy)
The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 */
export const deleteByTeamIdMembersAndUsername = api<(paths?: [teamid: number, username: string], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/members/{username}`

export type DeleteByTeamIdMembersAndUsername = Api<typeof deleteByTeamIdMembersAndUsername>

/**
 * Get team membership for a user (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:**
The response contains the `state` of the membership and the member's `role`.

The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#create-a-team).
 */
export const getByTeamIdMembershipsAndUsername = api<(paths?: [teamid: number, username: string], config?: Config<any, any>) => any>`GET /teams/{team_id}/memberships/{username}`

export type GetByTeamIdMembershipsAndUsername = Api<typeof getByTeamIdMembershipsAndUsername>

/**
 * Add or update team membership for a user (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
 */
export const putByTeamIdMembershipsAndUsername = api<(paths?: [teamid: number, username: string], body?: UnnamedModel$7, config?: Config<any, UnnamedModel$7>) => any>`PUT /teams/{team_id}/memberships/{username}`

export type PutByTeamIdMembershipsAndUsername = Api<typeof putByTeamIdMembershipsAndUsername>

/**
 * Remove team membership for a user (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 */
export const deleteByTeamIdMembershipsAndUsername = api<(paths?: [teamid: number, username: string], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/memberships/{username}`

export type DeleteByTeamIdMembershipsAndUsername = Api<typeof deleteByTeamIdMembershipsAndUsername>

/**
 * List team projects (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-team-projects) endpoint.

Lists the organization projects for a team.
 */
export const getByTeamIdProjects = api<(paths?: number, query?: GetByTeamIdProjectsQuery, config?: Config<GetByTeamIdProjectsQuery, any>) => any[]>`GET /teams/{team_id}/projects`

export type GetByTeamIdProjects = Api<typeof getByTeamIdProjects>

/**
 * Check team permissions for a project (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 */
export const getByTeamIdProjectsAndProjectId = api<(paths?: [teamid: number, projectid: number], config?: Config<any, any>) => any>`GET /teams/{team_id}/projects/{project_id}`

export type GetByTeamIdProjectsAndProjectId = Api<typeof getByTeamIdProjectsAndProjectId>

/**
 * Add or update team project permissions (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 */
export const putByTeamIdProjectsAndProjectId = api<(paths?: [teamid: number, projectid: number], body?: UnnamedModel$8, config?: Config<any, UnnamedModel$8>) => any>`PUT /teams/{team_id}/projects/{project_id}`

export type PutByTeamIdProjectsAndProjectId = Api<typeof putByTeamIdProjectsAndProjectId>

/**
 * Remove a project from a team (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
 */
export const deleteByTeamIdProjectsAndProjectId = api<(paths?: [teamid: number, projectid: number], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/projects/{project_id}`

export type DeleteByTeamIdProjectsAndProjectId = Api<typeof deleteByTeamIdProjectsAndProjectId>

/**
 * List team repositories (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-team-repositories) endpoint.
 */
export const getByTeamIdRepos = api<(paths?: number, query?: GetByTeamIdReposQuery, config?: Config<GetByTeamIdReposQuery, any>) => any[]>`GET /teams/{team_id}/repos`

export type GetByTeamIdRepos = Api<typeof getByTeamIdRepos>

/**
 * Check team permissions for a repository (Legacy)
**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/) via the `Accept` header:
 */
export const getByTeamIdReposAndOwnerAndRepo = api<(paths?: [teamid: number, owner: string, repo: string], config?: Config<any, any>) => any>`GET /teams/{team_id}/repos/{owner}/{repo}`

export type GetByTeamIdReposAndOwnerAndRepo = Api<typeof getByTeamIdReposAndOwnerAndRepo>

/**
 * Add or update team repository permissions (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export const putByTeamIdReposAndOwnerAndRepo = api<(paths?: [teamid: number, owner: string, repo: string], body?: UnnamedModel$9, config?: Config<any, UnnamedModel$9>) => any>`PUT /teams/{team_id}/repos/{owner}/{repo}`

export type PutByTeamIdReposAndOwnerAndRepo = Api<typeof putByTeamIdReposAndOwnerAndRepo>

/**
 * Remove a repository from a team (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
 */
export const deleteByTeamIdReposAndOwnerAndRepo = api<(paths?: [teamid: number, owner: string, repo: string], config?: Config<any, any>) => any>`DELETE /teams/{team_id}/repos/{owner}/{repo}`

export type DeleteByTeamIdReposAndOwnerAndRepo = Api<typeof deleteByTeamIdReposAndOwnerAndRepo>

/**
 * List child teams (Legacy)
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@3.0/rest/reference/teams#list-child-teams) endpoint.
 */
export const getByTeamIdTeams = api<(paths?: number, query?: GetByTeamIdTeamsQuery, config?: Config<GetByTeamIdTeamsQuery, any>) => any[]>`GET /teams/{team_id}/teams`

export type GetByTeamIdTeams = Api<typeof getByTeamIdTeams>
