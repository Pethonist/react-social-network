import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

import { reduxForm, Field } from 'redux-form';

import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from './../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.postBlock}>
      <h3>My posts</h3>
      <div className={styles.posts}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Post message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
