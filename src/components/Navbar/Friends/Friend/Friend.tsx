import React, { ReactElement } from 'react';

import s from './Friend.module.css';

export type FriendPropsType = {
  name: string;
  logo: string;
};

export const Friend = ({ name, logo }: FriendPropsType): ReactElement => (
  <div className={s.friend}>
    <img src={logo} alt="friend logo" />
    <div>{name}</div>
  </div>
);
