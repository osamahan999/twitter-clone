import React, { useState } from 'react';

import TweetReport from './TweetReport/TweetReport'
import TweetNameInfo from './TweetNameInfo/TweetNameInfo'
import styles from './TweetUserInfo.module.css';

function TweetUserInfo() {
    return (
        <div className={styles.TweetUserInfo}>
            <TweetNameInfo />
            <TweetReport />
        </div>
    );
}

export default TweetUserInfo