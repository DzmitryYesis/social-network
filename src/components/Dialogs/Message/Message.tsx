import React, { ReactElement } from 'react';

import s from '../Dialogs.module.css';

import { MessagePropsType } from 'types';

export const Message = ({ message }: MessagePropsType): ReactElement => (
  <div className={s.message}>{message}</div>
);
