import React, { ReactElement } from 'react';

import s from './Header.module.css';

export const Header = (): ReactElement => (
  <header className={s.header}>
    <img
      src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"
      alt="social-network logo"
    />
  </header>
);
