import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataPropsType} from './MyPost/Post/Post';

export type ProfilePagePropsType = {
    postData: Array<PostDataPropsType>
    addNewPost: (text: string) => void
    newPost: string
    changePostState: (text:string) => void
}

export const Profile = ({postData, addNewPost, newPost, changePostState, ...props}: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={postData} addNewPost={addNewPost} newPost={newPost} changePostState={changePostState}/>
        </div>
    )

}