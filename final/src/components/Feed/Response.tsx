import React from 'react';
import './Response.css';

interface Props {
    responder: string;
    date: string;
    response: any;
}

export default class Response extends React.PureComponent<Props> {
    private className = 'response';

    public render() {
        const { date, responder, response } = this.props;
        const c = this.className;
    
        return (
            <div className={c}>
                <div className={`${c}-metadata`}>
                    <span>
                        <span className='activity-user-name clickable'>{responder}</span>
                        <span> responded</span>
                    </span>
                </div>
                <div className='activity-date-container'>
                    <span className='activity-date'>{date}</span>
                </div>
                <div className={`${c}-inner`}>
                    {response}
                </div>
            </div>
        );
    }
}