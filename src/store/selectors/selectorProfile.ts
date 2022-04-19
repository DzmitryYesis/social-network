import { AppRootStateType } from 'store/store';
import { ProfilePagePropsType } from 'types';

export const selectProfileData = (state: AppRootStateType): ProfilePagePropsType =>
  state.profileData;
