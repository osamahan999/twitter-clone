import React, { useState } from 'react';

import styles from './ProfilePhotoTweetBox.module.css';


function ProfilePhotoTweetbox(props) {
    return (
        <div className={styles.ProfilePhotoTweetBox}>
            <img className={styles.profilephoto} src={props.url}></img>
        </div>
    );
}

export default ProfilePhotoTweetbox