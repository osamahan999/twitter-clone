import React, { useState } from 'react';

import TweetUserInfo from './TweetUserInfo/TweetUserInfo'
import TweetText from './TweetText/TweetText'
import styles from './TweetContentContainer.module.css';

function TweetContentContainer() {
    return (
        <div className={styles.TweetContentContainer}>
            {/* username and time */}
            <TweetUserInfo />
            {/* tweet text */}
            <TweetText />
            {/* tweet images */}
            {/* tweet buttons */}
        </div>
    );
}

export default TweetContentContainer