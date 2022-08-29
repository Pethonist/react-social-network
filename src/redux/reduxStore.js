import { legacy_createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
