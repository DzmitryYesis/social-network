import React, { ChangeEvent, ReactElement } from 'react';

import s from './MyPost.module.css';

import { Post } from 'components/Profile/MyPost/Post/Post';
import { ProfilePagePropsType } from 'types';

type MyPostPropsType = {
  addPost: () => void;
  changePostHandler: (text: string) => void;
  profilePage: ProfilePagePropsType;
};

export const MyPost = ({
  addPost,
  changePostHandler,
  profilePage,
}: MyPostPropsType): ReactElement => {
  const addPostHandle = (): void => {
    addPost();
  };
  const changePostHandle = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    changePostHandler(e.currentTarget.value);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={changePostHandle} value={profilePage.newPost} />
      </div>
      <div>
        <button onClick={addPostHandle} type="button">
          Add post
        </button>
      </div>
      <div className={s.posts}>
        {profilePage.postsData.map(v => (
          <Post key={v.id} post={v.post} numberLike={v.numberLike} />
        ))}
      </div>
    </div>
  );
};
