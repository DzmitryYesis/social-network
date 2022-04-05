export const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
export const CHANGE_POST_STATE = 'PROFILE/CHANGE_POST_STATE'

export const addPostAC = (post: string) =>
    ({type: ADD_NEW_POST, payload: {post}} as const)

export const changeNewPostStateAC = (newPost: string) =>
    ({type: CHANGE_POST_STATE, payload: {newPost}} as const)