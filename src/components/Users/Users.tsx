import { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { User } from './User';

import { selectUsers } from 'store/selectors';
import { getUsersTC } from 'UsersAPI';

// import { UsersBLLType, UsersReducerBLLType } from 'store/reducers/usersReducer';
// import { UsersAPI } from 'UsersAPI';

export const Users = (): ReactElement => {
  const users = useSelector(selectUsers);
  // const getUsers = async (): Promise<UsersReducerBLLType> => {
  //   // eslint-disable-next-line no-debugger
  //   debugger;
  //   const res = await UsersAPI.getUsers();
  //
  // };
  // eslint-disable-next-line no-debugger
  useEffect(() => {
    getUsersTC();
    // getUsers();
  }, []);
  // eslint-disable-next-line no-debugger
  return (
    <div>
      {users.map(u => (
        <User
          key={u.id}
          id={u.id}
          followed={u.followed}
          name={u.name}
          photos={u.photos}
          status={u.status}
        />
      ))}
    </div>
  );
};
