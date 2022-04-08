import React, { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dialogs } from './Dialogs';

import { addNewMessageAC, changeMessagePostStateAC } from 'store/actions';
import { selectDialogPage } from 'store/selectors/selectorDialogs';

export const DialogsContainer = (): ReactElement => {
  const dispatch = useDispatch();

  const dialogPage = useSelector(selectDialogPage);

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
