import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {Friends} from './Friends/Friends';
import {FriendsPropsType} from './Friends/Friend/Friend';

export type FriendsDataPropsType = {
    friendsData: Array<FriendsPropsType>
}

export const Navbar = ({friendsData, ...props}: FriendsDataPropsType) => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={({isActive}) => isActive ? s.active : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} className={({isActive}) => isActive ? s.active : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} className={({isActive}) => isActive ? s.active : ''}>Settings</NavLink>
            </div>
            <div>
                <Friends friendsData={friendsData}/>
            </div>
        </div>
    )

}
