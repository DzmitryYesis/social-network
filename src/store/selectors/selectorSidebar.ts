import { AppRootStateType } from 'store/store';
import { FriendsDataPropsType } from 'types';

export const selectFriendData = (state: AppRootStateType): FriendsDataPropsType =>
  state.sidebar;
