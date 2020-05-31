import React from 'react';
import Activity from './Activity';
import { FiAlertTriangle, FiCheckSquare, FiSquare, FiMessageSquare } from 'react-icons/fi';
import './Upload.css';

interface Props {
    count: number;
    date: string;
    imgPath: string;
    issues: number;
    responses: any[];
    validated: boolean;
    validatedBy?: string;
    uploadedBy: string;
}

export default class Upload extends React.PureComponent<Props> {
    private className = 'upload';

    public render() {
        const { count, date, imgPath, issues, validated, validatedBy, uploadedBy, responses } = this.props;
        const c = this.className;
    
        return (
            <Activity 
                activityText={<span><span>uploaded </span><span className={`${c}-count clickable`}>{count} new patients</span></span>}
                date={date}
                imgPath={imgPath}
                responses={responses}
                username={uploadedBy}
            >
                <div className={`${c}-inner`}>

                    {/* Issues */}
                    {issues > 0 &&
                    <div className={`${c}-issues-alert clickable`}><FiAlertTriangle />{issues} potential data quality issues found (click to view)</div>
                    }
                    {issues === 0 &&
                    <div className={`${c}-issues-none`}><FiCheckSquare/>No potential data quality issues found</div>
                    }

                    {/* Validation */}
                    {validated &&
                    <div className={`${c}-validated-yes`}><FiCheckSquare/>Validated by <span className='activity-user-name clickable'>{validatedBy}</span></div>
                    }
                    {!validated &&
                    <div className={`${c}-validated-no clickable`}><FiSquare/>Mark as validated</div>
                    }
                </div>
                <span className='activity-comment clickable'><FiMessageSquare/>Add Comment or Question</span>
            </Activity>
        );
    }
}