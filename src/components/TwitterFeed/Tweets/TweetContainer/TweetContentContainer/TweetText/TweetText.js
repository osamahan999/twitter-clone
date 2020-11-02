import React, { useState } from 'react';

import styles from './TweetText.module.css';

function TweetText() {
    return (
        <div className={styles.TweetText}>
            <p className={styles.TweetTextContent}>hi i ate pancake</p>
        </div>
    );
}

export default TweetText