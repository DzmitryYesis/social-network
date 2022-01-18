import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, store} from './redux/store-redux';
import {FriendsDataPropsType} from './redux/sidebarReducer';
import {ProfilePagePropsType} from './redux/profileReducer';
import {DialogsPagePropsType} from './redux/dialogsReducer';


const App = () => {

    const sidebar = useSelector<AppRootStateType, FriendsDataPropsType>((store) => store.sidebar)
    const profilePage = useSelector<AppRootStateType, ProfilePagePropsType>((store) => store.profilePage)
    const dialogPage = useSelector<AppRootStateType, DialogsPagePropsType>((store) => store.dialogsPage)
    const dispatch = useDispatch()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friendsData={sidebar.friendsData}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile
                               data={profilePage}
                               dispatch={dispatch.bind(store)}
                           />}
                    />
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               data={dialogPage}
                               dispatch={dispatch.bind(store)}
                           />}
                    />
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings/*'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};


export default App;
