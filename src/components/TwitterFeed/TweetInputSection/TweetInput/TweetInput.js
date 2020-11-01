import React, { useState } from 'react';

import styles from './TweetInput.module.css';

function TweetInput() {
    return (
        <div className={styles.TweetInput}>
            <textarea type="text" className={styles.textbox} placeholder="What's Happening?"></textarea>
        </div>
    );
}

export default TweetInput