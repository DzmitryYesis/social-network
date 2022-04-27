import { DialogsActionsType, ProfileActionsType, UsersActionsType } from 'types';

export type CommonActionsType =
  | ProfileActionsType
  | DialogsActionsType
  | UsersActionsType;
