import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPost/Post/Post';
import {ActionType} from '../../redux/store';

export type PostDataPropsType = {
    postData: Array<PostPropsType>
    newPost: string
}

export type ProfilePropsType = {
    data: PostDataPropsType
    dispatch: (action: ActionType) => void
}

export const Profile = ({data, dispatch, ...props}: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost data={data} dispatch={dispatch}/>
        </div>
    )

}