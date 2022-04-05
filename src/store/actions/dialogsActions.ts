export const ADD_NEW_MESSAGE = 'DIALOGS/ADD_NEW_MESSAGE'
export const CHANGE_MESSAGE_STATE = 'DIALOGS/CHANGE_MESSAGE_STATE'

export const addNewMessageAC = (message: string) =>
    ({type: ADD_NEW_MESSAGE, payload: {message}} as const)

export const changeMessagePostStateAC = (newMessage: string) =>
    ({type: CHANGE_MESSAGE_STATE, payload: {newMessage}} as const)