import React, { useState } from 'react';

import ProfilePhotoTweetBox from '../../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetContentContainer from './TweetContentContainer/TweetContentContainer'
import styles from './TweetContainer.module.css';

function TweetContainer() {
    return (
        <div className={styles.TweetContainer}>
            <ProfilePhotoTweetBox />
            <TweetContentContainer />
        </div>
    );
}

export default TweetContainer