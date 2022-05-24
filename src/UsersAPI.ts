import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from 'store';
import { setUsersAC } from 'store/actions';
import { UsersReducerBLLType } from 'store/reducers/usersReducer';
import { CommonActionsType } from 'types';

type AppThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionsType>;

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY as string,
  },
});

export const UsersAPI = {
  getUsers() {
    return instance.get<UsersReducerBLLType>('users');
  },
};

export const getUsersTC = (): AppThunkType => async dispatch => {
  try {
    const { data } = await UsersAPI.getUsers();
    dispatch(setUsersAC(data));
  } catch (error) {
    console.log(error);
  }
};
