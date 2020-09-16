import React from 'react';
import { Issue } from '../models/Issue';

interface IssueItemProps {
    issue: Issue;
}

export const IssueItem: React.FC<IssueItemProps> = (props: IssueItemProps) => {
    const { issue } = props;

    return (
        <React.Fragment>
            <li>{issue.title}</li>
        </React.Fragment>
    );
}