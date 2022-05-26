import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from 'store';
import { CommonActionsType } from 'types';

export type AppThunkType = ThunkAction<
  void,
  AppRootStateType,
  unknown,
  CommonActionsType
>;
