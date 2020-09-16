import React from 'react';
import './IssueItem.css';
import { Issue } from '../models/Issue';

interface IssueItemProps {
    issue: Issue;
}

interface IssueItemState { }

export class IssueItem extends React.Component<IssueItemProps, IssueItemState> {
    constructor(props: IssueItemProps) {
        super(props);
        this.state = {

        };
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <li>
                    <div style={{
                        border: '1px solid #eef0f3',
                        padding: 10
                    }}>
                        <div style={{ fontWeight: 'bold' }}>{this.props.issue.title}</div>
                        <div>{`#${this.props.issue.id} opened ${this.openedText(this.props.issue.created_at)} ago by ${this.props.issue.user.login}`}</div>
                    </div>
                </li>
            </React.Fragment>
        );
    }

    openedText = (opened: Date): string => {
        const now = new Date().getTime();
        const then = new Date(opened).getTime();
        let difference = (now - then) / 1000;
        difference /= (60 * 60);
        const hours = Math.abs(Math.round(difference));
        const days = Math.abs(Math.round(difference/24));
        
        if(hours > 48) {
            return `${days} days`;
        } else if(hours > 24) {
            return `a day`;
        } else {
            return `${hours} hours`;
        }
    }
}