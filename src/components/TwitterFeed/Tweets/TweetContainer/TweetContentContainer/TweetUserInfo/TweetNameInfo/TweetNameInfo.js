import React, { useState } from 'react';

import styles from './TweetNameInfo.module.css';

function TweetNameInfo(props) {
    return (
        <div className={styles.TweetNameInfo}>
            <p> {props.name}</p>
            <p className={styles.TweetNameInfoUserName}>{props.handle} - {props.timeTweeted}</p>
        </div>
    );
}

export default TweetNameInfo