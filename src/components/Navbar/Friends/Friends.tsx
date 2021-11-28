import s from './Friends.module.css';
import React from 'react';
import {FriendsDataPropsType} from '../../../redux/state';
import {Friend} from './Friend/Friend';


export const Friends = ({friendsData, ...props}: FriendsDataPropsType) => {
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            {
                friendsData.map(f =><Friend name={f.name} logo={f.logo}/>)
            }
        </div>
    )
}