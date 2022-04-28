import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { User } from 'components/Users/User/User';
import { AppRootStateType } from 'store';
import { UsersPagePropsType } from 'types';

export const Users = (): ReactElement => {
  const users = useSelector<AppRootStateType, UsersPagePropsType[]>(
    state => state.users.users,
  );
  return (
    <div>
      {users.map(u => (
        <User
          key={u.id}
          id={u.id}
          followed={u.followed}
          fullName={u.fullName}
          status={u.status}
          location={u.location}
        />
      ))}
    </div>
  );
};
