import React from 'react';
import Activity from './Activity';
import { FiMessageSquare } from 'react-icons/fi';
import './Question.css';

interface Props {
    asker: string;
    askee: string;
    date: string;
    imgPath: string;
    responses: any[];
    question: any;
}

export default class Question extends React.PureComponent<Props> {
    private className = 'question';

    public render() {
        const { date, imgPath, asker, askee, question, responses } = this.props;
        const c = this.className;
    
        return (
            <Activity 
                activityText={<span><span>asked a question to </span><span className='activity-user-name clickable'>{askee}</span></span>}
                date={date}
                imgPath={imgPath}
                responses={responses}
                username={asker}>
                <div className={`${c}-inner`}>
                    {question}
                </div>
                <span className='activity-comment clickable'><FiMessageSquare/>Add a Response</span>
            </Activity>
        );
    }
}