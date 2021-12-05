import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPagePropsType} from '../../redux/state';

export const Dialogs = ({dialogsData, messagesData, ...props}: DialogsPagePropsType) => {

    let sendMessageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        alert(sendMessageRef.current?.value)
    }

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
                <textarea ref={sendMessageRef}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
