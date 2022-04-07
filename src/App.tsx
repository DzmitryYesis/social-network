import React, { ReactElement } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';

import { DialogsContainer } from 'components';
import { PATH } from 'enum';

const App = (): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.DIALOGS} element={<DialogsContainer />} />
        <Route path={PATH.NEWS} element={<News />} />
        <Route path={PATH.MUSIC} element={<Music />} />
        <Route path={PATH.SETTINGS} element={<Settings />} />
      </Routes>
    </div>
  </div>
);

export default App;
