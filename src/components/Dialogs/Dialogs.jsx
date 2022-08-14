import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
  ];

  let messagesData = [
    { id: 1, text: 'hello 1' },
    { id: 2, text: 'hello 2' },
    { id: 3, text: 'hello 3' },
    { id: 4, text: 'hello 4' },
    { id: 5, text: 'hello 5' },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="1" id="1" />
        <DialogItem name="2" id="2" />
        <DialogItem name="3" id="3" />
        <DialogItem name="4" id="4" />
        <DialogItem name="5" id="5" />
      </div>
      <div className={styles.messages}>
        <Message text="hello 1" />
        <Message text="hello 2" />
        <Message text="hello 3" />
        <Message text="hello 4" />
        <Message text="hello 5" />
      </div>
    </div>
  );
};

export default Dialogs;
