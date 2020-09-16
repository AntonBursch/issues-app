import React from 'react';
import { Issue } from '../models/Issue';

interface IssuesProps {
    issues: Issue[];
}

export const Issues: React.FC<IssuesProps> = (props: IssuesProps) => {
    const { issues } = props;

    return (
        <React.Fragment>
            <ul>
                {
                    issues.filter((issue: Issue) => {
                        return issue.state === 'open'
                    }).map((issue: Issue, index: number) => {
                        return (
                            <li key={index}>{issue.title}</li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    );
}