import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataPropsType} from './MyPost/Post/Post';

export type ProfilePagePropsType = {
    postData: Array<PostDataPropsType>
    addNewPost: (text: string) => void
}

export const Profile = ({postData, addNewPost,...props}:ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={postData} addNewPost={addNewPost}/>
        </div>
    )

}