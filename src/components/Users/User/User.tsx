import { ReactElement } from 'react';

import { UsersPagePropsType } from 'types';

export const User = ({
  id,
  followed,
  fullName,
  status,
  location,
}: UsersPagePropsType): ReactElement => (
  <div key={id}>
    <div>
      <div>
        <img src="qwe" alt="user-logo" />
      </div>
      <div>
        {followed ? (
          <button type="button">UNFOLLOWED</button>
        ) : (
          <button type="button">FOLLOWED</button>
        )}
      </div>
    </div>
    <div>
      <div>
        <div>{fullName}</div>
        <div>{status}</div>
      </div>
      <div>
        <div>{location.city}</div>
        <div>{location.country}</div>
      </div>
    </div>
  </div>
);
