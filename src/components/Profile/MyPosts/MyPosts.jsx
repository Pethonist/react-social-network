import React from 'react';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi', likesCount: 10 },
    { id: 2, message: 'Hi again', likesCount: 2 },
  ];

  return (
    <div className={styles.postBlock}>
      <h3>My posts</h3>
      <div className={styles.posts}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi" likes="10" />
        <Post message="first post" likes="15" />
      </div>
    </div>
  );
};

export default MyPosts;
