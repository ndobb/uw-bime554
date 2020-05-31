import React from 'react';
import { FiHome, FiUploadCloud, FiDownloadCloud } from 'react-icons/fi'
import './Sidebar.css';

interface Props {}

export default class Sidebar extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    public render() {
        const c = 'sidebar';
        const tabs = [ 
            { text: 'Home', icon: <FiHome/>, active: true }, 
            { text: 'Upload', icon: <FiUploadCloud/>, active: false }, 
            { text: 'Download', icon: <FiDownloadCloud/>, active: false }, 
        ];

        return (
            <div id={`${c}-container`}>
                <div id={c}>
                    <ul className={`${c}-tab-list`}>
                        {tabs.map((t) => {
                            return (
                                <div key={t.text}>
                                    <li className={`${c}-tab ${t.active ? 'active' : ''}`}>
                                        <span className={`${c}-tab-icon`}>{t.icon}</span>
                                        <span className={`${c}-tab-text`}>{t.text}</span>
                                    </li>
                                    <div className={`${c}-tab-divider`} />
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};