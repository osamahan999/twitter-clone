import React, { useState } from 'react';
import ExitIcon from '../../../Tweets/TweetContainer/TweetContentContainer/TweetButtonContainer/TweetIcons/ExitIcon';

import styles from './TopSection.module.css';

function TopSection(props) {
    return (
        <div className={styles.TopSection}>
            <ExitIcon onClick={props.handleClose} />

            <span className={styles.UnsentTweets}>Unsent Tweets</span>

        </div>
    );
}

export default TopSection