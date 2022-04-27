import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { AppRootStateType } from 'store';
import { UsersPagePropsType } from 'types';

export const Users = (): ReactElement => {
  const users = useSelector<AppRootStateType, UsersPagePropsType[]>(
    state => state.users.users,
  );
  return (
    <div>
      {users.map(u => (
        <div key={u.id}>
          <div>
            <div>
              <img src="qwe" alt="user-logo" />
            </div>
            <div>
              {u.followed ? (
                <button type="button">UNFOLLOWED</button>
              ) : (
                <button type="button">FOLLOWED</button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
