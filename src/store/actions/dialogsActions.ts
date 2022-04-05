export const ADD_NEW_MESSAGE = 'DIALOGS/ADD_NEW_MESSAGE'
export const CHANGE_MESSAGE_POST_STATE = 'DIALOGS/CHANGE_MESSAGE_POST_STATE'

export const addNewMessageAC = (newMessage: string) =>
    ({type: ADD_NEW_MESSAGE, payload: {newMessage}} as const)

export const changeMessagePostStateAC = (newMessage: string) =>
    ({type: CHANGE_MESSAGE_POST_STATE, payload: {newMessage}} as const)