import React, { useState } from 'react';

import styles from './Tweetbox.module.css';
import ProfilePhotoTweetBox from '../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetInputSection from '../TweetInputSection/TweetInputSection'

function Tweetbox() {
    return (
        <div className={styles.Tweetbox}>
            <ProfilePhotoTweetBox />
            <TweetInputSection />
        </div>
    );
}

export default Tweetbox