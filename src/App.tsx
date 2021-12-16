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
import {StoreType} from './redux/state';

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
                               postData={state.profilePage.postData}
                               addNewPost={store.addNewPost.bind(store)}
                               newPost={state.profilePage.newPost}
                               changePostState={store.changePostState.bind(store)}
                           />}
                    />
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               dialogsData={state.dialogsPage.dialogsData}
                               messagesData={state.dialogsPage.messagesData}
                               newMessage={state.dialogsPage.newMessage}
                               changeMessagePost={store.changeMessagePost.bind(store)}
                               addNewMessage={store.addNewMessage.bind(store)}
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
