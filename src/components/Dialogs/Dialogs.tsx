import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsPagePropsType = {
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagePropsType>
    newMessage:string
    changeMessagePost:(newMessage: string) => void
    addNewMessage:(text: string) => void
}

export const Dialogs = ({dialogsData, messagesData, newMessage, changeMessagePost ,addNewMessage, ...props}: DialogsPagePropsType) => {



    const sendMessage = () => {
        addNewMessage(newMessage)
    }

    const changeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      changeMessagePost(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(m => <Message message={m.message} id={m.id}/>)
                }
                <textarea value={newMessage} onChange={changeMessageHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
