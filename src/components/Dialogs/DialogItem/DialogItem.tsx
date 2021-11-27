import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';


type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = ({name, id, ...props}: DialogItemPropsType) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}