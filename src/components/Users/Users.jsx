import React from 'react';
import styles from './Users.module.css';
import userImg from '../../assets/images/userDefaultImg.png';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
import { usersAPI } from './../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userImg}
                  className={styles.userPhoto}
                  alt="user"
                />
              </NavLink>
            </div>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFolowingProgress(true, u.id);
                  usersAPI.unfollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                    props.toggleFolowingProgress(false, u.id);
                  });

                  // axios
                  //   .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  //     withCredentials: true,
                  //     headers: { 'API-KEY': 'fc0e9266-ee84-4d92-8045-eb80a5b49b4c' },
                  //   })
                  //   .then((response) => {
                  //     if (response.data.resultCode === 0) {
                  //       props.unfollow(u.id);
                  //     }
                  //   });

                  // props.unfollow(u.id);
                }}>
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFolowingProgress(true, u.id);
                  usersAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.toggleFolowingProgress(false, u.id);
                  });

                  // axios
                  //   .post(
                  //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  //     {},
                  //     {
                  //       withCredentials: true,
                  //       headers: { 'API-KEY': 'fc0e9266-ee84-4d92-8045-eb80a5b49b4c' },
                  //     },
                  //   )
                  //   .then((response) => {
                  //     if (response.data.resultCode === 0) {
                  //       props.follow(u.id);
                  //     }
                  //   });
                  // props.follow(u.id);
                }}>
                Follow
              </button>
            )}
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>

            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
