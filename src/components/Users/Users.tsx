import { ReactElement, useEffect } from 'react';

// import { useSelector } from 'react-redux';

// import { User } from './User';

// import { selectUsers } from 'store/selectors';
import { getUsers } from 'UsersAPI';
// import { getUsersTC } from 'UsersAPI';

export const Users = (): ReactElement => {
  // const users = useSelector(selectUsers);

  useEffect(() => {
    // getUsersTC();
    getUsers();
  }, []);

  return (
    <div>
      Users
      {/* {users.map(u => ( */}
      {/*  <User */}
      {/*    key={u.id} */}
      {/*    id={u.id} */}
      {/*    followed={u.followed} */}
      {/*    name={u.name} */}
      {/*    photos={u.photos} */}
      {/*    status={u.status} */}
      {/*  /> */}
      {/* ))} */}
    </div>
  );
};
