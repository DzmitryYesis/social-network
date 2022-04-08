import { AppRootStateType } from 'store/store';
import { DialogsPagePropsType } from 'types';

export const selectDialogPage = (state: AppRootStateType): DialogsPagePropsType =>
  state.dialogsData;
