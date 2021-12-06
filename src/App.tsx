import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {FriendsDataPropsType, Navbar} from './components/Navbar/Navbar';
import {Profile, ProfilePagePropsType} from './components/Profile/Profile';
import {Dialogs, DialogsPagePropsType} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

export type AppPropsType={
    profilePage:ProfilePagePropsType
    dialogsPage:DialogsPagePropsType
    sidebar:FriendsDataPropsType
}

const App = ({profilePage, dialogsPage, sidebar, ...props}: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friendsData={sidebar.friendsData}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile postData={profilePage.postData} addNewPost={profilePage.addNewPost}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs dialogsData={dialogsPage.dialogsData}
                                                                 messagesData={dialogsPage.messagesData}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings/*'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
