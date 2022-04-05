import { ADD_NEW_POST, CHANGE_POST_STATE } from '../actions/profileActions';
import { CommonActionsType } from '../actions/type/commonActionsType';

const initialState = {
  postsData: [
    { id: 1, post: 'Hi! How are you?', numberLike: 5 },
    { id: 2, post: "It's my first post", numberLike: 45 },
    { id: 3, post: 'Welcome to hell', numberLike: 12 },
    { id: 4, post: 'My beautiful daughter', numberLike: 457 },
    { id: 5, post: 'My wife loves me', numberLike: 913 },
  ],
  newPost: '',
};

export type ProfilePagePropsType = {
  postsData: Array<PostDataPropsType>;
  newPost: string;
};
type PostDataPropsType = {
  id: number;
  post: string;
  numberLike: number;
};

export const profileReducer = (
  state: ProfilePagePropsType = initialState,
  action: CommonActionsType,
): ProfilePagePropsType => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: new Date().getDate(), post: action.payload.post, numberLike: 0 },
        ],
        newPost: '',
      };
    case CHANGE_POST_STATE:
      return { ...state, newPost: action.payload.newPost };
    default:
      return state;
  }
};
