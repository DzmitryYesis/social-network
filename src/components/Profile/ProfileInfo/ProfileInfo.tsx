import React, { ReactElement } from 'react';

import s from './ProfileInfo.module.css';

export const ProfileInfo = (): ReactElement => (
  <div>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAnH9q1eO2cMNhym5S0zm0k3i4wvJ3tjLVg&usqp=CAU"
      alt="profile-logo"
    />
    <div className={s.discriptionBlock}>ava+description</div>
  </div>
);
