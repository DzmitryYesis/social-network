import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { Friends } from './Friends';
import s from './Navbar.module.css';

export const Navbar = (): ReactElement => (
  <div className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : '')}>
        Profile
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : '')}>
        Messages
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : '')}>
        News
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : '')}>
        Music
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : '')}>
        Settings
      </NavLink>
    </div>
    <div>
      <Friends />
    </div>
  </div>
);
