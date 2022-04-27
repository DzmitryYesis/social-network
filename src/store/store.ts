import { combineReducers, createStore } from 'redux';

import {
  dialogsReducer,
  profileReducer,
  sidebarReducer,
  usersReducer,
} from 'store/reducers';

const rootReducer = combineReducers({
  profileData: profileReducer,
  dialogsData: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
