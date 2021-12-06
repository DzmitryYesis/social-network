import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsDataPropsType} from './DialogItem/DialogItem';
import {Message, MessageDataPropsType} from './Message/Message';

export type DialogsPagePropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessageDataPropsType>
}

export const Dialogs = ({dialogsData, messagesData, ...props}: DialogsPagePropsType) => {

    let sendMessageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        alert(sendMessageRef.current?.value)
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
                <textarea ref={sendMessageRef}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
