import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPost/Post/Post';

export type ProfilePropsType = {
    postData: Array<PostPropsType>
    newPost:string
    addNewPost:(text: string) => void
    changePostState:(newPost: string) => void
}

export const Profile = ({postData, addNewPost, newPost, changePostState, ...props}: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={postData} addNewPost={addNewPost} newPost={newPost} changePostState={changePostState}/>
        </div>
    )

}