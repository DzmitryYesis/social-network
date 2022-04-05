import {CommonActionsType} from '../actions/type/commonActionsType';
import {ADD_NEW_POST, CHANGE_POST_STATE} from '../actions/profileActions';

let initialState = {
    postData: [
        {id: 1, message: 'Hi! How are you?', numberLike: 5},
        {id: 2, message: 'It\'s my first post', numberLike: 45},
        {id: 3, message: 'Welcome to hell', numberLike: 12},
        {id: 4, message: 'My beautiful daughter', numberLike: 457},
        {id: 5, message: 'My wife loves me', numberLike: 913}
    ],
    newPost: '',
}

export type ProfilePagePropsType = {
    postData: Array<PostDataPropsType>
    newPost: string
}
type PostDataPropsType = {
    id: number
    message: string
    numberLike: number
}
type NewPostType = {
    id: number
    message: string
    numberLike: number
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: CommonActionsType): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost: NewPostType = {
                id: new Date().getDate(),
                message: action.payload.post,
                numberLike: 0
            }
            return {...state, postData: [...state.postData, newPost], newPost: ''}
        case CHANGE_POST_STATE:
            return {...state, newPost: action.payload.newPost}
        default:
            return state
    }

}