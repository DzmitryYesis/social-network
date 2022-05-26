import { FOLLOWED, SET_STATE, UNFOLLOWED } from 'store/actions';
import { CommonActionsType, UsersReducerBLLType } from 'types';

const initialState = {} as UsersReducerBLLType;

export const usersReducer = (
  state: UsersReducerBLLType = initialState,
  action: CommonActionsType,
): UsersReducerBLLType => {
  switch (action.type) {
    case SET_STATE: {
      return action.payload.state;
    }
    case FOLLOWED: {
      return {
        ...state,
        items: state.items.map(u =>
          u.id === action.payload.userID ? { ...u, followed: true } : u,
        ),
      };
    }
    case UNFOLLOWED: {
      return {
        ...state,
        items: state.items.map(u =>
          u.id === action.payload.userID ? { ...u, followed: false } : u,
        ),
      };
    }
    default:
      return state;
  }
};
