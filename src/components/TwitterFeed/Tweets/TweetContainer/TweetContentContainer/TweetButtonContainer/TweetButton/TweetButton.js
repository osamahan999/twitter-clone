import React, { useState } from 'react';


import styles from './TweetButton.module.css';

function TweetButton({ Icon, handlerFunction }) {
    return (
        <div className={styles.TweetButton}>

            <Icon className={styles.icon} onClick={handlerFunction} />

        </div>
    );
}

export default TweetButton