import React, { ChangeEvent, ReactElement } from 'react';

import s from './Dialogs.module.css';
import { Message } from './Message';
import { UserName } from './UserName';

import {
  DialogsDataPropsType,
  DialogsMessagePropsType,
  MessageDataPropsType,
} from 'types';

export const Dialogs = ({
  dialogsPage,
  writeMessage,
  sendMessage,
}: DialogsMessagePropsType): ReactElement => {
  const sendMessageHandle = (): void => {
    sendMessage();
  };

  const writeMessageHandle = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    writeMessage(e.currentTarget.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsPage.dialogsData.map((d: DialogsDataPropsType) => (
          <UserName key={d.id} name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {dialogsPage.messagesData.map((m: MessageDataPropsType) => (
          <Message key={m.id} message={m.message} />
        ))}
        <textarea value={dialogsPage.newMessage} onChange={writeMessageHandle} />
        <button type="button" onClick={sendMessageHandle}>
          Send message
        </button>
      </div>
    </div>
  );
};
