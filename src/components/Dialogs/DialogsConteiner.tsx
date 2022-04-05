import React from 'react';
import {addNewMessageAC, changeMessagePostStateAC} from '../../store/actions/Action';
import {Dialogs} from './Dialogs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store-redux';
import {DialogsPagePropsType} from '../../store/reducers/dialogsReducer';


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

