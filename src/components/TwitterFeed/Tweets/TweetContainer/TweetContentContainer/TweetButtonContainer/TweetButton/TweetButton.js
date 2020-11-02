import React, { useState } from 'react';


import styles from './TweetButton.module.css';

function TweetButton({ Icon }) {
    return (
        <div className={styles.TweetButton}>

            <Icon className={styles.icon} />

        </div>
    );
}

export default TweetButton