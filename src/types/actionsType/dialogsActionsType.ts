import { addNewMessageAC, changeMessagePostStateAC } from 'store/actions';

export type DialogsActionsType =
  | ReturnType<typeof addNewMessageAC>
  | ReturnType<typeof changeMessagePostStateAC>;
