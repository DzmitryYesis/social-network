export type DialogsPagePropsType = {
  dialogsData: DialogsDataPropsType[];
  messagesData: MessageDataPropsType[];
  newMessage: string;
};

export type DialogsDataPropsType = {
  id: number;
  name: string;
};

export type MessageDataPropsType = {
  id: number;
  message: string;
};
