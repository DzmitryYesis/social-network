import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';


export type DialogsDataPropsType = {
    id: number
    name: string
}

export const DialogItem = ({name, id, ...props}: DialogsDataPropsType) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}