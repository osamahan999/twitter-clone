import React, { useState } from 'react';

import TweetReport from './TweetReport/TweetReport'
import TweetNameInfo from './TweetNameInfo/TweetNameInfo'
import styles from './TweetUserInfo.module.css';

function TweetUserInfo(props) {
    return (
        <div className={styles.TweetUserInfo}>
            <TweetNameInfo name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} />
            <TweetReport />
        </div>
    );
}

export default TweetUserInfo