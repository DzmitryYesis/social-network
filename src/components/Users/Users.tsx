import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { User } from './User';

import { selectUsers } from 'store/selectors';

export const Users = (): ReactElement => {
  const users = useSelector(selectUsers);

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
