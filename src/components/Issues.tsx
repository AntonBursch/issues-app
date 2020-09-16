import React from 'react';
import './Issues.css';
import { Issue } from '../models/Issue';
import { IssueItem } from './IssueItem';

interface IssuesProps {
    issues: Issue[];
}

export const Issues: React.FC<IssuesProps> = (props: IssuesProps) => {
    const { issues } = props;
    let openIssues = issues.filter((issue: Issue) => {
        return issue.state === 'open'
    });
    let closedIssues = issues.filter((issue: Issue) => {
        return issue.state === 'closed'
    })
    return (
        <React.Fragment>
            <div style={{
                margin: 10
            }}>
                <ul>
                    <li>
                        <div style={{
                            backgroundColor: '#f5f7f9',
                            border: '1px solid #eef0f3',
                            padding: 10
                        }}>
                            {`${openIssues.length} Open ${closedIssues.length} Closed`}
                        </div>
                    </li>
                    {
                        openIssues.map((issue: Issue, index: number) => {
                            return (
                                <IssueItem
                                    key={index}
                                    issue={issue}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}