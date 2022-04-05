export const addNewMessageAC = (newMessage: string) =>
    ({type: 'ADD-NEW-MESSAGE', text: newMessage} as const)

export const changeMessagePostStateAC = (newMessage: string) =>
    ({type: 'CHANGE-MESSAGE-POST', newMessage: newMessage} as const)