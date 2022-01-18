export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostStateAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof changeMessagePostStateAC>

export const addPostAC = (newPost: string) =>
    ({type: 'ADD-NEW-POST', text: newPost} as const)

export const changeNewPostStateAC = (newPost: string) =>
    ({type: 'CHANGE-POST-STATE', newPost: newPost} as const)

export const addNewMessageAC = (newMessage: string) =>
    ({type: 'ADD-NEW-MESSAGE', text: newMessage} as const)

export const changeMessagePostStateAC = (newMessage: string) =>
    ({type: 'CHANGE-MESSAGE-POST', newMessage: newMessage} as const)