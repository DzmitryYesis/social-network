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
}

const Message = ({message, ...props}: MessagePropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Brat'} id={1}/>
                <DialogItem name={'Nastya'} id={2}/>
                <DialogItem name={'Kisa'} id={3}/>
                <DialogItem name={'Vlad'} id={4}/>
                <DialogItem name={'Gnedko'} id={5}/>
                <DialogItem name={'Malysh'} id={6}/>
                <DialogItem name={'Artem'} id={7}/>
            </div>
            <div className={s.messeges}>
                <Message message={'Ho!'}/>
                <Message message={'How are you?'}/>
                <Message message={'What about one cup of coffe?'}/>
                <Message message={'Great!'}/>
                <Message message={'My name Jora Smolenski'}/>
                <Message message={'It\'s joke'}/>
            </div>
        </div>
    )
}
