import { ReactElement } from 'react';

import { Div, LogoImg, UserWrapper } from 'style';
import { UsersPagePropsType } from 'types';

export const User = ({
  id,
  followed,
  fullName,
  logo,
  status,
  location,
}: UsersPagePropsType): ReactElement => (
  <UserWrapper key={id}>
    <Div direction="column" alignItems="flex-start">
      <div>
        <LogoImg src={logo} alt="user-logo" />
      </div>
      <div>
        {followed ? (
          <button type="button">UNFOLLOWED</button>
        ) : (
          <button type="button">FOLLOWED</button>
        )}
      </div>
    </Div>
    <Div direction="row" justifyContent="space-between" width="450px">
      <Div direction="column" alignItems="flex-start" justifyContent="space-around">
        <div>{fullName}</div>
        <div>{status}</div>
      </Div>
      <Div direction="column" alignItems="flex-end" justifyContent="space-around">
        <div>{location.city}</div>
        <div>{location.country}</div>
      </Div>
    </Div>
  </UserWrapper>
);
