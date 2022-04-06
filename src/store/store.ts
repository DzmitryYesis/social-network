import { combineReducers, createStore } from 'redux';

import { dialogsReducer, profileReducer, sidebarReducer } from 'store/reducers';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
