import React, { useState } from 'react';

import styles from './ProfilePhotoTweetBox.module.css';


function ProfilePhotoTweetbox() {
    return (
        <div className={styles.ProfilePhotoTweetBox}>
            <img id="profile-photo" src="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg"></img>
        </div>
    );
}

export default ProfilePhotoTweetbox