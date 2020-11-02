import React, { useState } from 'react';

import styles from './TweetInputSection.module.css';
import TweetInput from './TweetInput/TweetInput';

function TweetInputSection() {
    return (
        <div className={styles.TweetInputSection}>
            <TweetInput />
        </div>
    );
}

export default TweetInputSection