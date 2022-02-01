import React from 'react';
import {DialogsPropsType} from './DialogItem/DialogItem';
import {MessagePropsType} from './Message/Message';
import {ActionType, addNewMessageAC, changeMessagePostStateAC} from '../../redux/Action';
import {Dialogs} from './Dialogs';

export type DialogsType = {
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagePropsType>
    newMessage: string
}

export type DialogsConteinerPagePropsType = {
    data: DialogsType
    dispatch: (action: ActionType) => void
}

export const DialogsConteiner = ({data, dispatch, ...props}: DialogsConteinerPagePropsType) => {


    const sendMessage = () => {
        dispatch(addNewMessageAC(data.newMessage))
    }

    const changeMessageHandler = (text: string) => {
        dispatch(changeMessagePostStateAC(text))
    }

    return (
        <Dialogs newMessage={data.newMessage} dialogsData={data.dialogsData} messagesData={data.messagesData}
                 sendMessage={sendMessage} changeMessageHandler={changeMessageHandler}/>
    )
}
