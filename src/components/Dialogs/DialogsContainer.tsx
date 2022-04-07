import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dialogs } from './Dialogs';

import { AppRootStateType } from 'store';
import { addNewMessageAC, changeMessagePostStateAC } from 'store/actions';
import { DialogsPagePropsType } from 'store/reducers';

export const DialogsContainer = (): ReactElement => {
  const dialogPage = useSelector<AppRootStateType, DialogsPagePropsType>(
    store => store.dialogsData,
  );
  const dispatch = useDispatch();

  const sendMessage = (): void => {
    dispatch(addNewMessageAC(dialogPage.newMessage));
  };

  const writeMessage = (text: string): void => {
    dispatch(changeMessagePostStateAC(text));
  };

  return (
    <Dialogs
      dialogsPage={dialogPage}
      sendMessage={sendMessage}
      writeMessage={writeMessage}
    />
  );
};
