import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/messagesReducer';

import { connect } from 'react-redux';

import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
