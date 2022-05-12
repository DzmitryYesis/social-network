import { FOLLOWED, SET_STATE, UNFOLLOWED } from 'store/actions';
import { CommonActionsType } from 'types';

export type UsersReducerBLLType = {
  users: UsersBLLType[];
  totalCount: number;
  error: string;
};

export type UsersBLLType = {
  id: number;
  name: string;
  status: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
};

const initialState = {} as UsersReducerBLLType;

// const initialState = {
//   users: [
//     {
//       id: '1',
//       followed: true,
//       fullName: 'Dzmitry',
//       logo: 'https://scontent.fayt1-1.fna.fbcdn.net/v/t1.18169-9/16472832_1804279236455402_2422817639588311809_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zg8ZJ25xmKUAX_rcC4L&_nc_ht=scontent.fayt1-1.fna&oh=00_AT_IzZV8nXNjwMwMusy_CrGLmbpLWRB2j8HXs4vlCggSMw&oe=628FC71D',
//       status: 'I am JS-developer',
//       location: { country: 'Belarus', city: 'Minsk' },
//     },
//     {
//       id: '2',
//       followed: true,
//       fullName: 'Nastya',
//       logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrsiVybzszJuFxv_dZUp5j2oMN-ZGv4Hp7zQXZmhocQ&s',
//       status: 'I am Account-Manager',
//       location: { country: 'Belarus', city: 'Minsk' },
//     },
//     {
//       id: '3',
//       followed: false,
//       fullName: 'Alex',
//       logo: 'https://www.it-academy.by/upload/iblock/1a6/1a6f30eb2d4021c20ec4054033030e8d.jpg',
//       status: 'I am JS-developer',
//       location: { country: 'Turkey', city: 'Alanya' },
//     },
//     {
//       id: '4',
//       followed: true,
//       fullName: 'Dzmitry',
//       logo: 'https://sun1-99.userapi.com/s/v1/if2/V3kwl1pFsKyeheEmV-4yPfhEABgDU8aSGZQIS7Pe2c9AKkJZlACYNm2J1zEiBHGQbfO7xvIaeU2LBe_FjnvNYiB6.jpg?size=200x200&quality=96&crop=1097,403,801,801&ava=1',
//       status: 'I am Fisherman',
//       location: { country: 'Belarus', city: 'Bereza' },
//     },
//   ],
// };

// export const usersReducer = (
//   state: UsersReducerBLLType = initialState,
//   action: CommonActionsType,
// ): UsersReducerType => {
//   switch (action.type) {
//     case SET_STATE: {
//       return { ...state, users: [...state.users, ...action.payload.state] };
//     }
//     case FOLLOWED: {
//       return {
//         ...state,
//         users: state.users.map(u =>
//           u.id === action.payload.userID ? { ...u, followed: true } : u,
//         ),
//       };
//     }
//     case UNFOLLOWED: {
//       return {
//         ...state,
//         users: state.users.map(u =>
//           u.id === action.payload.userID ? { ...u, followed: false } : u,
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

export const usersReducer = (
  state: UsersReducerBLLType = initialState,
  action: CommonActionsType,
): UsersReducerBLLType => {
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
