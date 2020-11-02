import React, { useState } from 'react';

import TweetContainer from './TweetContainer/TweetContainer'
import styles from './Tweet.module.css';

function Tweet() {
    return (
        <div className={styles.Tweet}>
            {/* X Liked this tweet */}

            <TweetContainer />



        </div>
    );
}

export default Tweet