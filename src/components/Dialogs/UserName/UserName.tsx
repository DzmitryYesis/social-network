import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import s from '../Dialogs.module.css';

import { PATH } from 'enum';

export type UserNamePropsType = {
  id: number;
  name: string;
};

export const UserName = ({ name, id }: UserNamePropsType): ReactElement => {
  const path = `${PATH.DIALOGS}${id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
