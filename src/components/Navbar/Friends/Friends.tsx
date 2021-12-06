import s from './Friends.module.css';
import React from 'react';
import {Friend} from './Friend/Friend';
import {FriendsDataPropsType} from '../Navbar';


export const Friends = ({friendsData, ...props}: FriendsDataPropsType) => {
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div>
                {
                    friendsData.map(f => <Friend name={f.name} logo={f.logo}/>)
                }
            </div>
        </div>
    )
}