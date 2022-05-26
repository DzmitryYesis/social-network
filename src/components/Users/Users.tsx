import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { User } from './User';

import { selectUsers } from 'store/selectors';
import { getUsersTC } from 'store/thunks';

export const Users = (): ReactElement => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  return (
    <div>
      {users?.map(u => (
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
