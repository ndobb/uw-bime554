import React from 'react';
import './Activity.css';
import { Row, Col } from 'reactstrap';

interface Props {
    activityText: any;
    date: string;
    imgPath: string;
    responses: any[];
    username: string;
}

export default class Activity extends React.PureComponent<Props> {
    public render() {
        const { imgPath, children, username, date, activityText, responses } = this.props;

        return (
            <div className='activity-container'>
                <div className='activity'>
                    <span className='activity-hide'>Hide</span>
                    <div className='activity-metadata'>
                        <div className='activity-pic-container'>
                            <img alt={imgPath} className="user-face" src={`${process.env.PUBLIC_URL}/${imgPath}`} />
                        </div>
                        <div className='activity-metadata-inner'>
                            <div className='activity-user-name-container'>
                                <span className='activity-user-name clickable'>{username}</span>
                                <span> </span>
                                <span>{activityText}</span>
                            </div>
                            <div className='activity-date-container'>
                                <span className='activity-date'>{date}</span>
                            </div>
                        </div>
                    </div>
                    <div className='activity-content'>
                        {children}
                    </div>
                </div>
                {responses.length > 0 &&
                <Row>
                    <Col md={{ size: 9, offset: 3 }}>
                        <div className='activity-responses-ellipses'>⋮ </div>
                        {responses}
                    </Col>
                </Row>
                }
            </div>
        );
    }
}