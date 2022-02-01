import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPagePropsType} from '../../redux/dialogsReducer';


export type DialogsMessagePropsType = {
    dialogsPage: DialogsPagePropsType
    sendMessage: () => void
    changeMessageHandler: (text: string) => void
}

export const Dialogs = (props: DialogsMessagePropsType) => {


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
                    props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
                }
                <textarea value={props.dialogsPage.newMessage} onChange={changeMessageHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
