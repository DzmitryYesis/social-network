import React from 'react';
import {addNewMessageAC, changeMessagePostStateAC} from '../../redux/Action';
import {Dialogs} from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store-redux';
import {DialogsPagePropsType} from '../../redux/dialogsReducer';


export const DialogsConteiner = () => {

    const dialogPage = useSelector<AppRootStateType, DialogsPagePropsType>((store) => store.dialogsPage)
    const dispatch = useDispatch()

    const sendMessage = () => {
        dispatch(addNewMessageAC(dialogPage.newMessage))
    }

    const changeMessageHandler = (text: string) => {
        dispatch(changeMessagePostStateAC(text))
    }

    return (
        <Dialogs dialogsPage={dialogPage}
                 sendMessage={sendMessage} changeMessageHandler={changeMessageHandler}/>
    )
}

