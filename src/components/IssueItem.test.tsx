import React from 'react';
import ReactDOM from 'react-dom';
import { IssueItem } from './IssueItem';

it('IssueItem renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IssueItem issue={{
        url: "https://api.github.com/repos/octocat/Hello-World/issues/643",
        repository_url: "https://api.github.com/repos/octocat/Hello-World",
        labels_url: "https://api.github.com/repos/octocat/Hello-World/issues/643/labels{/name}",
        comments_url: "https://api.github.com/repos/octocat/Hello-World/issues/643/comments",
        events_url: "https://api.github.com/repos/octocat/Hello-World/issues/643/events",
        html_url: "https://github.com/octocat/Hello-World/issues/643",
        id: 682388156,
        node_id: "MDU6SXNzdWU2ODIzODgxNTY=",
        number: 643,
        title: "title",
        user: {
            login: "jayasanka-sack",
            id: 33048395,
            node_id: "MDQ6VXNlcjMzMDQ4Mzk1",
            avatar_url: "https://avatars1.githubusercontent.com/u/33048395?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/jayasanka-sack",
            html_url: "https://github.com/jayasanka-sack",
            followers_url: "https://api.github.com/users/jayasanka-sack/followers",
            following_url: "https://api.github.com/users/jayasanka-sack/following{/other_user}",
            gists_url: "https://api.github.com/users/jayasanka-sack/gists{/gist_id}",
            starred_url: "https://api.github.com/users/jayasanka-sack/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/jayasanka-sack/subscriptions",
            organizations_url: "https://api.github.com/users/jayasanka-sack/orgs",
            repos_url: "https://api.github.com/users/jayasanka-sack/repos",
            events_url: "https://api.github.com/users/jayasanka-sack/events{/privacy}",
            received_events_url: "https://api.github.com/users/jayasanka-sack/received_events",
            type: "User",
            site_admin: false
        },
        labels: [],
        state: "open",
        locked: false,
        assignee: undefined,
        assignees: [],
        milestone: undefined,
        comments: 2,
        created_at: new Date("2020-08-20T03:43:33Z"),
        updated_at: new Date("2020-09-15T10:23:15Z"),
        pull_request: undefined,
        closed_at: undefined,
        author_association: "NONE",
        active_lock_reason: undefined,
        body: undefined,
        performed_via_github_app: undefined
    }} />, div);
});