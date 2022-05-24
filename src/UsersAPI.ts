import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from 'store';
// import { setUsersAC } from 'store/actions';
import { setUsersAC } from 'store/actions';
import { UsersReducerBLLType } from 'store/reducers/usersReducer';
import { CommonActionsType } from 'types';

type AppThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionsType>;

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const UsersAPI = {
  getUsers() {
    return instance.get<UsersReducerBLLType>('users');
  },
};
// const two = 2;
// export const getUsers = async (): Promise<any> => {
//   const res = await UsersAPI.getUsers();
//   console.log(JSON.stringify(res.data.items, null, two));
// };

export const getUsersTC = (): AppThunkType => async dispatch => {
  // eslint-disable-next-line no-debugger
  debugger;
  try {
    const { data } = await UsersAPI.getUsers();
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(setUsersAC(data));
    // eslint-disable-next-line no-debugger
    debugger;
  } catch (error) {
    console.log(error);
  }
};

// export const getUsersTC = () => (dispatch: Dispatch<CommonActionsType>) => {
//   UsersAPI.getUsers()
//     .then(res => {
//       dispatch(setUsersAC(res.data.users));
//     })
//     .catch(Error => {
//       console.log(Error);
//     });
// };
