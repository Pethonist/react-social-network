import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <br />
      <div className={styles.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
