import React, { ChangeEvent, ReactElement } from 'react';

import s from './MyPost.module.css';
import { Post } from './Post';

import { ProfilePagePropsType } from 'types';

type MyPostPropsType = {
  addPost: () => void;
  changePost: (text: string) => void;
  profileData: ProfilePagePropsType;
};

export const MyPost = ({
  addPost,
  changePost,
  profileData,
}: MyPostPropsType): ReactElement => {
  const addPostHandle = (): void => {
    addPost();
  };
  const changePostHandle = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    changePost(e.currentTarget.value);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={changePostHandle} value={profileData.newPost} />
      </div>
      <div>
        <button onClick={addPostHandle} type="button">
          Add post
        </button>
      </div>
      <div className={s.posts}>
        {profileData.postsData.map(v => (
          <Post key={v.id} post={v.post} numberLike={v.numberLike} />
        ))}
      </div>
    </div>
  );
};
