import React, { ReactElement } from 'react';

import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import { MyPostContainer } from 'components/Profile/MyPost';

export const Profile = (): ReactElement => (
  <div>
    <ProfileInfo />
    <MyPostContainer />
  </div>
);
