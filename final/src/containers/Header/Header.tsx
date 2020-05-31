import React from 'react';
import { Navbar } from 'reactstrap';
import './Header.css';

interface Props {}

export default class Header extends React.PureComponent<Props> {
    private className = 'header';

    public render() {
        const c = this.className;

        return (
            <Navbar id={`${c}-container`} className="d-flex justify-content-between mb-3">
                <div className={`${c}-content-side`}>
                    <div className={`${c}-title"`} >
                        <div className="title">CSER Data Hub</div>
                        <img alt="cser-logo" className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
                    </div>
                </div>
                <div className="mx-auto">
                </div>
                <div className={`${c}-content-side ${c}-content-side-right`}>
                </div>
            </Navbar>
        );
    }
}