import React from 'react';
import s from './Friend.module.css'

export type FriendPropsType = {
    name: string
    logo: string
}

export const Friend = ({name,logo,...props}:FriendPropsType) => {
    return (
        <div className={s.friend}>
            <img src={logo}/>
            <div>
                {name}
            </div>
        </div>
    )

}