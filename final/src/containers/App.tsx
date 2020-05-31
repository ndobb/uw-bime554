import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';

interface Props {}

class App extends React.Component<Props> {
    public render() {
        return (
            <div className='app'>
                <Sidebar/>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
