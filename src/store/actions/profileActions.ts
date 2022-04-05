

export const addPostAC = (newPost: string) =>
    ({type: 'ADD-NEW-POST', text: newPost} as const)

export const changeNewPostStateAC = (newPost: string) =>
    ({type: 'CHANGE-POST-STATE', newPost: newPost} as const)