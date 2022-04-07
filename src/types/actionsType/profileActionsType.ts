import { addPostAC, changeNewPostStateAC } from 'store/actions';

export type ProfileActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof changeNewPostStateAC>;
