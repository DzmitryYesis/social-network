import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { Friends } from './Friends';
import s from './Navbar.module.css';

import { PATH } from 'enum';

export const Navbar = (): ReactElement => (
  <div className={s.nav}>
    <div className={s.item}>
      <NavLink to={PATH.PROFILE} className={({ isActive }) => (isActive ? s.active : '')}>
        Profile
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={PATH.DIALOGS} className={({ isActive }) => (isActive ? s.active : '')}>
        Messages
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={PATH.NEWS} className={({ isActive }) => (isActive ? s.active : '')}>
        News
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink to={PATH.MUSIC} className={({ isActive }) => (isActive ? s.active : '')}>
        Music
      </NavLink>
    </div>
    <div className={s.item}>
      <NavLink
        to={PATH.SETTINGS}
        className={({ isActive }) => (isActive ? s.active : '')}
      >
        Settings
      </NavLink>
    </div>
    <div>
      <Friends />
    </div>
  </div>
);
