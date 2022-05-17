import { ReactElement } from 'react';

import { UsersBLLType } from 'store/reducers/usersReducer';
import { Div, LogoImg, UserWrapper } from 'style';

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
          src={
            photos.small != null
              ? photos.small
              : 'data:image/png;base64,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'
          }
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
