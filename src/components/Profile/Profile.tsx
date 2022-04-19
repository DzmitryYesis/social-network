import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostContainer from 'components/Profile/MyPost/MyPostContainer';


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )

}