

export const addPostAC = (newPost: string) =>
    ({type: 'ADD-NEW-POST', payload: { newPost}} as const)

export const changeNewPostStateAC = (newPost: string) =>
    ({type: 'CHANGE-POST-STATE', payload: { newPost}} as const)