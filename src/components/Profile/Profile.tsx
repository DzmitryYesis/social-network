import React, { ReactElement } from 'react';

import { MyPostContainer } from 'components/Profile/MyPost';
import { ProfileInfo } from 'components/Profile/ProfileInfo';

export const Profile = (): ReactElement => (
  <div>
    <ProfileInfo />
    <MyPostContainer />
  </div>
);
