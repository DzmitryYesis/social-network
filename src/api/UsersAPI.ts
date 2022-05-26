import { instance } from 'api';
import { UsersReducerBLLType } from 'types';

export const UsersAPI = {
  getUsers() {
    return instance.get<UsersReducerBLLType>('users');
  },
};
