import React, { useState } from 'react';

import styles from './TweetText.module.css';

function TweetText(props) {
    return (
        <div className={styles.TweetText}>
            <p className={styles.TweetTextContent}>{props.content}</p>
        </div>
    );
}

export default TweetText