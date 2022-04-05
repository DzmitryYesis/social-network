import React, { ReactElement } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { DialogsConteiner } from './components/Dialogs/DialogsConteiner';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';

const App = (): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path={'/dialogs/*'} element={<DialogsConteiner />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path={'/settings/*'} element={<Settings />} />
      </Routes>
    </div>
  </div>
);

export default App;
