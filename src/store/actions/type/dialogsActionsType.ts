import { addNewMessageAC, changeMessagePostStateAC } from '../dialogsActions';

export type DialogsActionsType =
  | ReturnType<typeof addNewMessageAC>
  | ReturnType<typeof changeMessagePostStateAC>;
