import { UsersReducerType } from 'types';

export const FOLLOWED = 'USERS/FOLLOWED';
export const UNFOLLOWED = 'USERS/UNFOLLOWED';
export const SET_STATE = 'USERS/SET-STATE';

export const followedAC = (userID: string) =>
  ({
    type: FOLLOWED,
    payload: {
      userID,
    },
  } as const);

export const unFollowedAC = (userID: string) =>
  ({
    type: UNFOLLOWED,
    payload: {
      userID,
    },
  } as const);

export const setUsersAC = (state: UsersReducerType) =>
  ({
    type: SET_STATE,
    payload: {
      state,
    },
  } as const);
