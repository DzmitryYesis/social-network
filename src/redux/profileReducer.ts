import {ActionType, NewPostType, ProfilePagePropsType} from './store';


export const profileReducer = (state: ProfilePagePropsType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost: NewPostType = {
                id: new Date().getDate(),
                message: action.text,
                numberLike: 0
            }
            state.postData.push(newPost)
            state.newPost = ''
            return state
        case 'CHANGE-POST-STATE':
            state.newPost = action.newPost
            return state
        default:
            return state
    }

}