import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfilePropsType={
    value: Array<PostDataPropsType>
}

type PostDataPropsType = {
    id: number
    message: string
    numberLike: number
}

export const Profile = ({value,...props}:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost value={value}/>
        </div>
    )

}