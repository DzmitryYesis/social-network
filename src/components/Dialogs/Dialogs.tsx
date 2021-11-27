import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

// const users = [
//     {user: 'Brat', path: '/dialogs/1'},
//     {user: 'Kisa', path: '/dialogs/2'},
//     {user: 'Vlad', path: '/dialogs/3'},
//     {user: 'Starik', path: '/dialogs/4'},
//     {user: 'Nastya', path: '/dialogs/5'},
//     {user: 'Igor', path: '/dialogs/6'},
//     {user: 'Sveta', path: '/dialogs/7'}
// ]


type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = ({name, id, ...props}: DialogItemPropsType) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
    id: number
}

const Message = ({message, ...props}: MessagePropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Brat'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Kisa'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Gnedko'},
        {id: 6, name: 'Malysh'},
        {id: 7, name: 'Artem'}
    ]

    let messagesData = [
        {id: 1, message: 'Ho!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about one cup of coffe?'},
        {id: 4, message: 'Great!'},
        {id: 5, message: 'My name Jora Smolenski'},
        {id: 6, message: 'It\'s joke'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(m => <Message message={m.message} id={m.id}/>)
                }
            </div>
        </div>
    )
}
