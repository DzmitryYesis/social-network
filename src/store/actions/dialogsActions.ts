

export const addNewMessageAC = (newMessage: string) =>
    ({type: 'ADD-NEW-MESSAGE', payload: {newMessage}} as const)

export const changeMessagePostStateAC = (newMessage: string) =>
    ({type: 'CHANGE-MESSAGE-POST', payload: {newMessage}} as const)