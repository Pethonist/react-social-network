import React, { useRef } from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let newPostElement = useRef(null);

  return (
    <div className={styles.postBlock}>
      <h3>My posts</h3>
      <div className={styles.posts}>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
