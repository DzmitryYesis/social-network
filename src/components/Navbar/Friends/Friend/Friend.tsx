import React from 'react';
import {FriendsPropsType} from '../../../../redux/state';
import s from './Friend.module.css'

export const Friend = ({name,logo,...props}:FriendsPropsType) => {
    return (
        <div className={s.friend}>
            <img src={logo}/>
            <div>
                {name}
            </div>
        </div>
    )

}