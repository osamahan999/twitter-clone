import React, { useState } from 'react';

import styles from './Tweetbox.module.css';
import ProfilePhotoTweetBox from '../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetInputSection from '../TweetInputSection/TweetInputSection'

function Tweetbox(props) {
    return (
        <div className={props.className}>
            <ProfilePhotoTweetBox url={props.url} />
            <TweetInputSection updateFeed={props.updateFeed} placeholder={props.placeholder} />
        </div>
    );
}

export default Tweetbox