import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';


export type DialogsPagePropsType = {
    newMessage: string
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagePropsType>
    sendMessage: () => void
    changeMessageHandler: (text: string) => void
}

export const Dialogs = (props: DialogsPagePropsType) => {


    const sendMessage = () => {
        props.sendMessage()
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageHandler(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
                }
                <textarea value={props.newMessage} onChange={changeMessageHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
