import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';
import {ActionType, addNewMessageAC, changeMessagePostStateAC} from '../../redux/state';

export type DialogsType = {
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagePropsType>
    newMessage: string
}

export type DialogsPagePropsType = {
    data: DialogsType
    dispatch: (action: ActionType) => void
}

export const Dialogs = ({data, dispatch, ...props}: DialogsPagePropsType) => {


    const sendMessage = () => {
        dispatch(addNewMessageAC(data.newMessage))
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeMessagePostStateAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    data.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    data.messagesData.map(m => <Message message={m.message} id={m.id}/>)
                }
                <textarea value={data.newMessage} onChange={changeMessageHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}
