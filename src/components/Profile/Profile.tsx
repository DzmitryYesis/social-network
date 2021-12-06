import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePagePropsType} from '../../redux/state';



export const Profile = ({postData, addNewPost,...props}:ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={postData} addNewPost={addNewPost}/>
        </div>
    )

}