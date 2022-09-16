import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.descriptionBlock}>
      <img src={props.profile.photos.large} alt="profile" />
      <h1>{props.profile.fullName}</h1>
      <h3>{props.profile.aboutMe}</h3>
      <h3>{props.profile.lookingForAJob ? 'Yes' : 'No'}</h3>
      <h3>{props.profile.lookingForAJobDescription}</h3>

      <h1>ProfileStatus:</h1>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
