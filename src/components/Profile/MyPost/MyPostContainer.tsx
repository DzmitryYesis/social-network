import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MyPost } from './MyPost';

import { addPostAC, changeNewPostStateAC } from 'store/actions';
import { selectProfileData } from 'store/selectors';

export const MyPostContainer = (): ReactElement => {
  const dispatch = useDispatch();

  const profileData = useSelector(selectProfileData);

  const addPost = (): void => {
    dispatch(addPostAC(profileData.newPost));
  };
  const changePost = (text: string): void => {
    dispatch(changeNewPostStateAC(text));
  };

  return <MyPost addPost={addPost} changePost={changePost} profileData={profileData} />;
};
