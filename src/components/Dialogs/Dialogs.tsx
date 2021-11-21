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

type DialodItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialodItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessegePropsType={
    messege:string
}

const Messege:React.FC<MessegePropsType> = (props) => {
    return (
        <div className={s.messege}>{props.messege}</div>
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
                <DialogItem name={'Malish'} id={6}/>
                <DialogItem name={'Artem'} id={7}/>
            </div>
            <div className={s.messeges}>
                <Messege messege={'Ho!'}/>
                <Messege messege={'How are you?'}/>
                <Messege messege={'What about one cup of coffe?'}/>
                <Messege messege={'Great!'}/>
                <Messege messege={'My name Jora Smolenski'}/>
                <Messege messege={'It\'s joke'}/>
            </div>
        </div>
    )
}
