import { Assignee } from "./Assignee";
import { Label } from "./Label";
import { Milestone } from "./Milestone";
import { PullRequest } from "./PullRequest";
import { User } from "./User";

export interface Issue {
    id: number;
    node_id: string;
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    state: string;
    title: string;
    body: string;
    user: User;
    labels: Label[];
    assignee: Assignee;
    assignees: Assignee[];
    milestone: Milestone;
    locked: boolean;
    active_lock_reason: string;
    comments: number;
    pull_request: PullRequest;
    closed_at?: any;
    created_at: Date;
    updated_at: Date;
}