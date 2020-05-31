import React from 'react';
import './Meetings.css';
import Meeting from '../../components/Meetings/Meeting';

interface Props {}

export default class Meetings extends React.PureComponent<Props> {
    public render() {
        const mia = 'Mia Biostatistician (UNC)'
        const meetings = [
            <Meeting 
                date='June 5th, 1:00pm' topic='Weekly Meeting' link='https://washington.zoom.us/j/198582910'
                agenda={[ 
                    'Evaluate proposed Adult Baseline survey changes', 
                    'AnVIL test uploading discussion', 
                    <span><span>Presentation: Analysis of latest Outcomes Follow-up data </span><span className='activity-user-name clickable'>{mia}</span></span>
                ]}
                participants={[ 'Margaret Data Coordinator', 'Sara Johnson (Vanderbilt', 'Gary Liu (UCSF)', 'Elly Sanchez (HudsonAlpha)', 'Mia Biostatistician (UNC)' ]}
            />
        ];

        return (
            <div className='meetings'>
                <div className='meetings-header'>Upcoming Meetings</div>
                <div className='meetings-inner'>
                    {meetings}
                </div>
            </div>
        );
    }
}