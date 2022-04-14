import { AppRootStateType } from 'store/store';
import { FriendsDataPropsType } from 'types';

export const selectFriedData = (state: AppRootStateType): FriendsDataPropsType =>
  state.sidebar;
