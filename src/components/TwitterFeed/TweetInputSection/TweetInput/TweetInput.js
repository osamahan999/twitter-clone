import React, { useState } from 'react';

import styles from './TweetInput.module.css';

function TweetInput() {
    return (
        <div className={styles.TweetInput}>
            <input type="text" id="textbox"></input>
        </div>
    );
}

export default TweetInput