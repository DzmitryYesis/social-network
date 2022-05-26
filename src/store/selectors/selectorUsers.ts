import { AppRootStateType } from 'store';
import { UsersBLLType } from 'types';

export const selectUsers = (state: AppRootStateType): UsersBLLType[] => state.users.items;
