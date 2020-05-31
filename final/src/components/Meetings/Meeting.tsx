import React from 'react';
import { Row, Col } from 'reactstrap';
import './Meeting.css';

interface Props {
    agenda: any[];
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
                <Row>
                    <Col md={6}>
                        <div className='meeting-participants-container'>
                            <div className='meeting-participants'>
                                <span>Participants:</span>
                                {participants.map((p) => {
                                    return <div className='meeting-participant clickable'>{p}</div>;
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='meeting-agenda-container'>
                            <div className='meeting-agenda'>
                                <span>Agenda:</span>
                                <ol>
                                    {agenda.map((a) => {
                                        return <li className='meeting-agenda-item'>{a}</li>;
                                    })}
                                </ol>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}