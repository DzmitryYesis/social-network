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
    id:number
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

    let messageData = [
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
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
            </div>
            <div className={s.messeges}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
                <Message message={messageData[5].message} id={messageData[5].id}/>
            </div>
        </div>
    )
}
