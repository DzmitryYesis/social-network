import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </BrowserRouter>
    );
}


export default App;
