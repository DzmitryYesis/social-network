import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';

export const Profile = () => {
    return (
        <div>
            <img

                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAnH9q1eO2cMNhym5S0zm0k3i4wvJ3tjLVg&usqp=CAU'}/>
            <div>
                ava+discription
            </div>
            <MyPost/>
        </div>
    )

}