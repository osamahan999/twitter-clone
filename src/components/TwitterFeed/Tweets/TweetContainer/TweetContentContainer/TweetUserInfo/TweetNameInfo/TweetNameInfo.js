import React, { useState } from 'react';

import styles from './TweetNameInfo.module.css';

function TweetNameInfo() {
    return (
        <div className={styles.TweetNameInfo}>
            <p>Osama </p>
            <p className={styles.TweetNameInfoUserName}>@OsamaHansolo - 1h</p>
        </div>
    );
}

export default TweetNameInfo