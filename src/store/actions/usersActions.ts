import { UsersReducerBLLType } from 'types';

export const FOLLOWED = 'USERS/FOLLOWED';
export const UNFOLLOWED = 'USERS/UNFOLLOWED';
export const SET_STATE = 'USERS/SET-STATE';

export const followedAC = (userID: number) =>
  ({
    type: FOLLOWED,
    payload: {
      userID,
    },
  } as const);

export const unFollowedAC = (userID: number) =>
  ({
    type: UNFOLLOWED,
    payload: {
      userID,
    },
  } as const);

export const setUsersAC = (state: UsersReducerBLLType) =>
  ({
    type: SET_STATE,
    payload: {
      state,
    },
  } as const);
