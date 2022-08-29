import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi first time', likesCount: 10 },
        { id: 2, message: 'Hi again', likesCount: 2 },
      ],
      newPostText: 'Hi first time',
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
      ],
      messages: [
        { id: 1, text: 'hello 1' },
        { id: 2, text: 'hello 2' },
        { id: 3, text: 'hello 3' },
        { id: 4, text: 'hello 4' },
        { id: 5, text: 'hello 5' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log('+');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
