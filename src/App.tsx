import React, { ReactElement } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  DialogsContainer,
  Header,
  Music,
  Navbar,
  News,
  Settings,
  Profile,
  Users,
} from 'components';
import { PATH } from 'enum';

export const App = (): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.DIALOGS} element={<DialogsContainer />} />
        <Route path={PATH.USERS} element={<Users />} />
        <Route path={PATH.NEWS} element={<News />} />
        <Route path={PATH.MUSIC} element={<Music />} />
        <Route path={PATH.SETTINGS} element={<Settings />} />
      </Routes>
    </div>
  </div>
);
