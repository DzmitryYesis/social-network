import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const users = [
    {user: 'Brat', path: '/dialogs/1'},
    {user: 'Kisa', path: '/dialogs/2'},
    {user: 'Vlad', path: '/dialogs/3'},
    {user: 'Starik', path: '/dialogs/4'},
    {user: 'Nastya', path: '/dialogs/5'},
    {user: 'Igor', path: '/dialogs/6'},
    {user: 'Sveta', path: '/dialogs/7'}
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {users.map((u) => {
                    return (
                        <div className={s.dialog}>
                            <NavLink to={u.path}>{u.user}</NavLink>
                        </div>
                    )
                })}

                {/*<div className={s.dialog}>*/}
                {/*    Brat*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    Kisa*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    Vlad*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    Starik*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    Some man*/}
                {/*</div>*/}
            </div>
            <div className={s.messeges}>
                <div className={s.messege}>Hi</div>
                <div className={s.messege}>What is your name?</div>
                <div className={s.messege}>Fack you, Spilberg!</div>

            </div>
        </div>
    )
}
