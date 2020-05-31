import React from 'react';
import './Meetings.css';
import Meeting from '../../components/Meetings/Meeting';

interface Props {}

export default class Meetings extends React.PureComponent<Props> {
    public render() {
        const mia = 'Mia Biostatistician (UNC)';
        const margarent = 'Margaret Data Coordinator';
        const meetings = [
            <Meeting 
                date='June 5th, 1:00pm' topic='Weekly Meeting' link='https://washington.zoom.us/j/198582910'
                agenda={[ 
                    'Evaluate proposed Adult Baseline survey changes', 
                    'AnVIL test uploading discussion', 
                    <span><span>Presentation: Analysis of latest Outcomes Follow-up data </span><span className='activity-user-name clickable'>({mia})</span></span>
                ]}
                participants={[ 'Margaret Data Coordinator', 'Sara Johnson (Vanderbilt', 'Gary Liu (UCSF)', 'Elly Sanchez (HudsonAlpha)', 'Mia Biostatistician (UNC)' ]}
            />,
            <Meeting 
                date='June 12th, 1:00pm' topic='AnVIL Test Environment Discussion' link='https://washington.zoom.us/j/94398201'
                agenda={[
                    <span><span>Walkthrough of new AnVIL features </span><span className='activity-user-name clickable'>({margarent})</span></span>
                ]}
                participants={[ 'Margaret Data Coordinator', 'Mia Biostatistician (UNC)', 'Marcus Research Analyst (UW)' ]}
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