import React from 'react';
import Upload from '../../components/Feed/Upload';
import Question from '../../components/Feed/Question';
import Response from '../../components/Feed/Response';
import './Feed.css';

interface Props {}

export default class Feed extends React.PureComponent<Props> {
    public render() {
        const margaret = 'Margaret Data Coordinator';
        const elly = 'Elly Sanchez (HudsonAlpha)';
        const sara = 'Sara Johnson (Vanderbilt)';
        const gary = 'Gary Liu (UCSF)';
        const activities = [
            <Upload 
                count={27} date='May 20th, 2:26pm' imgPath='user1.jpg' issues={0} validated={true} 
                validatedBy={margaret} uploadedBy={sara} responses={[]} 
            />,
            <Upload 
                count={10} date='May 20th, 11:50am' imgPath='user2.jpg' issues={2} 
                validated={false} uploadedBy={gary} responses={[]}
            />,
            <Question 
                date='May 20th, 9:02am' imgPath='user3.jpg' asker={elly} askee={margaret}
                question={`How should we handle missing values on the Adult Baseline survey question num1_abl? About 50% of our new patients skipped that question.`}
                responses={[
                    <Response date='May 20th, 9:38am' responder={margaret} response={`We've added the value '0' to indicate "Not Answered", so you can use that.`} />,
                    <Response date='May 20th, 9:50am' responder={elly} response='Great, thanks!' />
                ]}
            />
        ];

        return (
            <div className='feed'>
                <div className='feed-header'>Recent Upload Activity</div>
                {activities}
            </div>
        );
    }
}