import { ADD_NEW_MESSAGE, CHANGE_MESSAGE_STATE, CommonActionsType } from 'store/actions';
import { DialogsPagePropsType } from 'store/reducers';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Brat' },
    { id: 2, name: 'Nasty' },
    { id: 3, name: 'Kaisa' },
    { id: 4, name: 'Vlad' },
    { id: 5, name: 'Gnedenko' },
    { id: 6, name: 'Mash' },
    { id: 7, name: 'Artem' },
  ],
  messagesData: [
    { id: 1, message: 'Ho!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What about one cup of coffee?' },
    { id: 4, message: 'Great!' },
    { id: 5, message: 'My name Jira Smolensk' },
    { id: 6, message: "It's joke" },
  ],
  newMessage: '',
};

export const dialogsReducer = (
  state: DialogsPagePropsType = initialState,
  action: CommonActionsType,
): DialogsPagePropsType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: new Date().getDate(), message: action.payload.message },
        ],
        newMessage: '',
      };
    case CHANGE_MESSAGE_STATE:
      return { ...state, newMessage: action.payload.newMessage };
    default:
      return state;
  }
};
