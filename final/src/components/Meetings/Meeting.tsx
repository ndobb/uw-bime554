import React from 'react';
import './Meeting.css';

interface Props {
    agenda: any;
    date: string;
    link: string;
    participants: string[];
    topic: string;
}

export default class Meeting extends React.PureComponent<Props> {
    public render() {
        const { agenda, date, participants, topic, link } = this.props;

        return (
            <div className='meeting'>
                <div className='meeting-topic'>{topic}</div>
                <div className='meeting-date'>{date}</div>
                <div className='meeting-link clickable'>{link}</div>
                <div className='meeting-participants-container'>
                    <div className='meeting-participants'>Participants:</div>
                    {participants.map((p) => {
                        return (
                            <div className='meeting-participant'>{p}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}