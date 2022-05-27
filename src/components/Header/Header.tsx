import React, { ReactElement } from 'react';

import s from './Header.module.css';

import { ImgSocialNetworkLogo } from 'style';

export const Header = (): ReactElement => (
  <header className={s.header}>
    <ImgSocialNetworkLogo
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIONc1xiSu0HrIWKYdX_MULUCPuglLI83Ogg&usqp=CAU"
      alt="social-network logo"
    />
  </header>
);
