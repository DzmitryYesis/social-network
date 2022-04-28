import { AppRootStateType } from 'store';
import { UsersPagePropsType } from 'types';

export const selectUsers = (state: AppRootStateType): UsersPagePropsType[] =>
  state.users.users;
