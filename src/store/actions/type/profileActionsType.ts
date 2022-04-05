import { addPostAC, changeNewPostStateAC } from '../profileActions';

export type ProfileActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof changeNewPostStateAC>;
