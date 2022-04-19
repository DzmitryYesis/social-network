import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MyPost } from './MyPost';

import { AppRootStateType } from 'store';
import { addPostAC, changeNewPostStateAC } from 'store/actions';
import { ProfilePagePropsType } from 'types';

const MyPostContainer = (): ReactElement => {
  const profilePage = useSelector<AppRootStateType, ProfilePagePropsType>(
    store => store.profileData,
  );
  const dispatch = useDispatch();

  const addPost = (): void => {
    dispatch(addPostAC(profilePage.newPost));
  };
  const changePost = (text: string): void => {
    dispatch(changeNewPostStateAC(text));
  };

  return <MyPost addPost={addPost} changePost={changePost} profilePage={profilePage} />;
};

export default MyPostContainer;
