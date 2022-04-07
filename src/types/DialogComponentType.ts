import { DialogsPagePropsType } from 'types';

// Props Type

export type MessagePropsType = {
  message: string;
};

export type UserNamePropsType = {
  id: number;
  name: string;
};

export type DialogsMessagePropsType = {
  dialogsPage: DialogsPagePropsType;
  sendMessage: () => void;
  writeMessage: (text: string) => void;
};
