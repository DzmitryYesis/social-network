import { combineReducers, createStore } from 'redux';

import { dialogsReducer } from './reducers/dialogsReducer';
import { profileReducer } from './reducers/profileReducer';
import { sidebarReducer } from './reducers/sidebarReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
