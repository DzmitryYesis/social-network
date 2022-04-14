import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { FriendsDataPropsType } from '../../../store/reducers/sidebarReducer';
import { AppRootStateType } from '../../../store/store';

import { Friend } from './Friend/Friend';
import s from './Friends.module.css';

export const Friends = (): ReactElement => {
  const sidebar = useSelector<AppRootStateType, FriendsDataPropsType>(
    store => store.sidebar,
  );

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div>
        {sidebar.friendsData.map(f => (
          <Friend name={f.name} logo={f.logo} />
        ))}
      </div>
    </div>
  );
};
