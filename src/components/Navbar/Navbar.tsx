import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const arrNavBar = [
    {path: '/profile', title: 'My Profile'},
    {path: '/dialogs', title: 'My Messages'},
    {path: '/news', title: 'News'},
    {path: '/music', title: 'My Music'},
    {path: '/settings', title: 'Settings'}
]

export const Navbar = () => {
    return (
        <div className={s.nav}>
            {arrNavBar.map((el_navbar) => {
                    return (
                        <div className={s.item}>
                            <NavLink to={el_navbar.path} className={({isActive}) => isActive ? s.active : ''}>{el_navbar.title}</NavLink>
                        </div>
                    )
                }
            )
            }


            {/*    <div className={s.item}>*/}
            {/*        <NavLink to={'/profile'} className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.item}>*/}
            {/*        <NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.active : ''}>Messages</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.item}>*/}
            {/*        <NavLink to={'/news'} className={({isActive}) => isActive ? s.active : ''}>News</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.item}>*/}
            {/*        <NavLink to={'/music'} className={({isActive}) => isActive ? s.active : ''}>Music</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.item}>*/}
            {/*        <NavLink to={'/settings'} className={({isActive}) => isActive ? s.active : ''}>Settings</NavLink>*/}
            {/*    </div>*/}
        </div>
    )

}
