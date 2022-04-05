import {CommonActionsType} from '../actions/type/commonActionsType';
import {ADD_NEW_MESSAGE, CHANGE_MESSAGE_POST_STATE} from '../actions/dialogsActions';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Brat'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Kisa'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Gnedko'},
        {id: 6, name: 'Malysh'},
        {id: 7, name: 'Artem'}
    ],
    messagesData: [
        {id: 1, message: 'Ho!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about one cup of coffe?'},
        {id: 4, message: 'Great!'},
        {id: 5, message: 'My name Jora Smolenski'},
        {id: 6, message: 'It\'s joke'}
    ],
    newMessage: '',
}


export type DialogsPagePropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessageDataPropsType>
    newMessage: string
}
type DialogsDataPropsType = {
    id: number
    name: string
}
type MessageDataPropsType = {
    id: number
    message: string
}
type NewMessageType = {
    id: number
    message: string
}


export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: CommonActionsType): DialogsPagePropsType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage: NewMessageType = {
                id: new Date().getDate(),
                message: action.payload.message
            }
            return {...state, messagesData: [...state.messagesData, newMessage], newMessage: ''}
        case CHANGE_MESSAGE_POST_STATE:
            return {...state, newMessage: action.payload.newMessage}
        default:
            return state
    }
}

