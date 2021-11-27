import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


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
