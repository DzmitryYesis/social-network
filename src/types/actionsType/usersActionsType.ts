import { followedAC, setUsersAC, unFollowedAC } from 'store/actions';

export type UsersActionsType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof followedAC>
  | ReturnType<typeof unFollowedAC>;
