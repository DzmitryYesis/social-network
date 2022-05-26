import { UsersAPI } from 'api';
import { setUsersAC } from 'store/actions';
import { AppThunkType } from 'types';

export const getUsersTC = (): AppThunkType => async dispatch => {
  try {
    const { data } = await UsersAPI.getUsers();
    dispatch(setUsersAC(data));
  } catch (error) {
    console.log(error);
  }
};
