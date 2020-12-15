import React, { useState } from 'react';

import styles from './Tweet.module.css';
import ProfilePhotoTweetbox from '../ProfilePhotoTweetBox/ProfilePhotoTweetBox';
import TweetContentContainer from './TweetContainer/TweetContentContainer/TweetContentContainer';

const axios = require('axios');

function Tweet(props) {





    return (
        <div className={styles.Tweet}>
            {/* X Liked this tweet */}

            <div className={styles.TweetContainer}>
                <ProfilePhotoTweetbox url={props.url} />
                <TweetContentContainer name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} content={props.content} url={props.url} />
            </div>


        </div>
    );
}

export default Tweet