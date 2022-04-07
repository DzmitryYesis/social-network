import React, { ReactElement } from 'react';

import s from '../Dialogs.module.css';

export type MessagePropsType = {
  message: string;
};

export const Message = ({ message }: MessagePropsType): ReactElement => (
  <div className={s.message}>{message}</div>
);
