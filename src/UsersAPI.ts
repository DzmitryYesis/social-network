import axios from 'axios';
// import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';

// import { AppRootStateType } from 'store';
// import { setUsersAC } from 'store/actions';
import { UsersReducerBLLType } from 'store/reducers/usersReducer';
// import { CommonActionsType } from 'types';

// type AppThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionsType>;

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const UsersAPI = {
  getUsers() {
    return instance.get<UsersReducerBLLType>('users');
  },
};

export const getUsers = async (): Promise<any> => {
  const res = await UsersAPI.getUsers();
  console.log(res.data.users);
};

// export const getUsersTC = (): AppThunkType => async dispatch => {
//   try {
//     const { data } = await UsersAPI.getUsers();
//     console.log(data.users);
//     dispatch(setUsersAC(data.users));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getUsersTC = () => (dispatch: Dispatch<CommonActionsType>) => {
//   UsersAPI.getUsers()
//     .then(res => {
//       dispatch(setUsersAC(res.data.users));
//     })
//     .catch(Error => {
//       console.log(Error);
//     });
// };
