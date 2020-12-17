import React, { useState } from 'react';

import styles from './TweetButton.module.css';

function TweetButton(props) {
    return (
        <button onClick={props.handleClick} className={styles.TweetButton} action="">
            Tweet
        </button>
    );
}

export default TweetButton