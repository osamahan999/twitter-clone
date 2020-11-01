import React, { useState } from 'react';

import styles from './TweetButton.module.css';

function TweetButton() {
    return (
        <button className={styles.TweetButton} action="">
            Tweet
        </button>
    );
}

export default TweetButton