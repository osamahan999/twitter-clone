import React, { useState } from 'react';

import TweetContainer from './TweetContainer/TweetContainer'
import styles from './Tweet.module.css';

const axios = require('axios');

function Tweet(props) {





    return (
        <div className={styles.Tweet}>
            {/* X Liked this tweet */}

            <TweetContainer name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} content={props.content} url={props.url} />



        </div>
    );
}

export default Tweet