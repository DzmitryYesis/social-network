export type DialogsPagePropsType = {
  dialogsData: DialogsDataPropsType[];
  messagesData: MessageDataPropsType[];
  newMessage: string;
};

type DialogsDataPropsType = {
  id: number;
  name: string;
};

type MessageDataPropsType = {
  id: number;
  message: string;
};
