import { FOLLOWED, SET_STATE, UNFOLLOWED } from 'store/actions';
import { CommonActionsType, UsersReducerType } from 'types';

const initialState = {
  users: [
    {
      id: '1',
      followed: true,
      fullName: 'Dzmitry',
      status: 'I am JS-developer',
      location: { country: 'Belarus', city: 'Minsk' },
    },
    {
      id: '2',
      followed: true,
      fullName: 'Nastya',
      status: 'I am Account-Manager',
      location: { country: 'Belarus', city: 'Minsk' },
    },
    {
      id: '3',
      followed: false,
      fullName: 'Alex',
      status: 'I am JS-developer',
      location: { country: 'Turkey', city: 'Alanya' },
    },
    {
      id: '4',
      followed: true,
      fullName: 'Dzmitry',
      status: 'I am Automator',
      location: { country: 'Belarus', city: 'Bereza' },
    },
  ],
};

export const usersReducer = (
  state: UsersReducerType = initialState,
  action: CommonActionsType,
): UsersReducerType => {
  switch (action.type) {
    case SET_STATE: {
      return { ...state, users: [...state.users, ...action.payload.state] };
    }
    case FOLLOWED: {
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.payload.userID ? { ...u, followed: true } : u,
        ),
      };
    }
    case UNFOLLOWED: {
      return {
        ...state,
        users: state.users.map(u =>
          u.id === action.payload.userID ? { ...u, followed: false } : u,
        ),
      };
    }
    default:
      return state;
  }
};
