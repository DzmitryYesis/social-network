import { ReactElement } from 'react';

import { UsersLogoNull } from 'constants/URL';
import { Div, LogoImg, UserWrapper } from 'style';
import { UsersBLLType } from 'types';

export const User = ({
  id,
  followed,
  status,
  name,
  photos,
}: UsersBLLType): ReactElement => (
  <UserWrapper key={id}>
    <Div direction="column" alignItems="flex-start">
      <div>
        <LogoImg
          src={photos.small != null ? photos.small : UsersLogoNull}
          alt="user-logo"
        />
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
        <div>{name}</div>
        <div>{status}</div>
      </Div>
      <Div direction="column" alignItems="flex-end" justifyContent="space-around">
        <div>City</div>
        <div>Country</div>
      </Div>
    </Div>
  </UserWrapper>
);
