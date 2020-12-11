import React, { useState } from 'react';

import ProfilePhotoTweetBox from '../../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetContentContainer from './TweetContentContainer/TweetContentContainer'
import styles from './TweetContainer.module.css';



function TweetContainer(props) {



    return (

        <div className={styles.TweetContainer}>
            <ProfilePhotoTweetBox url={props.url} />
            <TweetContentContainer name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} content={props.content} url={props.url} />
        </div>);
}

export default TweetContainer