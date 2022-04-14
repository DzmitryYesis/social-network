import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { Friend } from './Friend';
import s from './Friends.module.css';

import { selectFriendData } from 'store/selectors';

export const Friends = (): ReactElement => {
  const sidebar = useSelector(selectFriendData);

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div>
        {sidebar.friendsData.map(f => (
          <Friend name={f.name} logo={f.logo} key={f.id} />
        ))}
      </div>
    </div>
  );
};
