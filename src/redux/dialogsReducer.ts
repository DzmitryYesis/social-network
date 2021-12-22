import {ActionType, DialogsPagePropsType, NewMessageType} from './state';


export const dialogsReducer = (state: DialogsPagePropsType, action: ActionType):DialogsPagePropsType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            let newMessage: NewMessageType = {
                id: new Date().getDate(),
                message: action.text
            }
            state.messagesData.push(newMessage)
            state.newMessage = ''
            return state
        case 'CHANGE-MESSAGE-POST':
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }
}