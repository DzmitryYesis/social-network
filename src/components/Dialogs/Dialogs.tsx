import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

type DialogsPropsType = {
    dialogs: Array<DialogsDataPropsType>
    message: Array<MessageDataPropsType>
}

type DialogsDataPropsType = {
    id: number
    name: string
}

type MessageDataPropsType = {
    id: number
    message: string
}

export const Dialogs = ({dialogs, message,...props}:DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    message.map(m => <Message message={m.message} id={m.id}/>)
                }
            </div>
        </div>
    )
}
