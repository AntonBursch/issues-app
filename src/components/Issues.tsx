import React from 'react';
import { Issue } from '../models/Issue';
import { IssueItem } from './IssueItem';

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
                            <IssueItem 
                                key={index} 
                                issue={issue} 
                            />
                        )
                    })
                }
            </ul>
        </React.Fragment>
    );
}