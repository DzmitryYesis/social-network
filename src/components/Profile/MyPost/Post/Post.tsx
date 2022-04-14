import React, { ReactElement } from 'react';

import s from './Post.module.css';

export type PostPropsType = {
  message: string;
  numberLike: number;
};

export const Post = ({ message, numberLike }: PostPropsType): ReactElement => (
  <div className={s.item}>
    <img
      src="https://www.meme-arsenal.com/memes/58a847c6512c43f49c91cbebb847e27c.jpg"
      alt="post logo"
    />
    {message}
    <div>
      <span>{numberLike} likes</span>
    </div>
  </div>
);
