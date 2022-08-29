import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} alt="profile" />
        <h1>{props.profile.fullName}</h1>
        <h3>{props.profile.aboutMe}</h3>
        <h3>{props.profile.lookingForAJob ? 'Yes' : 'No'}</h3>
        <h3>{props.profile.lookingForAJobDescription}</h3>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
