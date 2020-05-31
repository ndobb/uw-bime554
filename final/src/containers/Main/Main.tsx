import React from 'react';
import Feed from '../Feed/Feed';
import './Main.css';

interface Props {}

export default class Main extends React.PureComponent<Props> {
    public render() {
        return (
            <div className='main'>
                <div className='main-inner'>
                    <Feed/>
                </div>
            </div>
        );
    }
}