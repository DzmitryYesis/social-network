import { AppRootStateType } from 'store';
import { UsersBLLType } from 'store/reducers/usersReducer';

export const selectUsers = (state: AppRootStateType): UsersBLLType[] => state.users.users;
