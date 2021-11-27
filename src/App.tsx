import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

const App = () => {

    let postData = [
        {id: 1, message: 'Hi! How are you?', numberLike: 5},
        {id: 2, message: 'It\'s my first post', numberLike: 45},
        {id: 3, message: 'Welcome to hell', numberLike: 12},
        {id: 4, message: 'My beautiful daughter', numberLike: 457},
        {id: 5, message: 'My wife loves me', numberLike: 913}
    ]

    let dialogsData = [
        {id: 1, name: 'Brat'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Kisa'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Gnedko'},
        {id: 6, name: 'Malysh'},
        {id: 7, name: 'Artem'}
    ]

    let messagesData = [
        {id: 1, message: 'Ho!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about one cup of coffe?'},
        {id: 4, message: 'Great!'},
        {id: 5, message: 'My name Jora Smolenski'},
        {id: 6, message: 'It\'s joke'}
    ]

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile value={postData}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs={dialogsData} message={messagesData}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
