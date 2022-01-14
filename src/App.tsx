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
import {StoreType} from './redux/store';

type PropsType = {
    store: StoreType
}


const App = ({store, ...props}: PropsType) => {
    const state = store.getState()
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friendsData={state.sidebar.friendsData}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile
                               data={state.profilePage}
                               dispatch={store.dispatch.bind(store)}
                               // newPost={state.profilePage.newPost}
                           />}
                    />
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               data={state.dialogsPage}
                               dispatch={store.dispatch.bind(store)}
                           />}
                    />
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings/*'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
