import React, { useState } from 'react';

import styles from './ProfilePhotoTweetBox.module.css';


function ProfilePhotoTweetbox(props) {
    return (
        //change src="" to src = {props.url} when we start passing 
        <div className={styles.ProfilePhotoTweetBox}>
            <img className={styles.profilephoto} src={props.url}></img>
        </div>
    );
}

export default ProfilePhotoTweetbox