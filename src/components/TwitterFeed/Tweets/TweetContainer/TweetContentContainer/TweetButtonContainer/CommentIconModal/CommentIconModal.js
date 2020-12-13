import React, { useState } from 'react';

import TweetUserInfo from '../../TweetUserInfo/TweetUserInfo'
import TweetText from '../../TweetText/TweetText'

import styles from './CommentIconModal.module.css';
import ProfilePhotoTweetbox from '../../../../../ProfilePhotoTweetBox/ProfilePhotoTweetBox';
import Tweetbox from '../../../../../Tweetbox/Tweetbox';
import TopSection from '../../../../../TweetInputSection/TweetInput/TopSection/TopSection';

function CommentIconModal({ Icon, name, handle, timeTweeted, url, content, handleClose }) {

    return (
        <div className={styles.tweetModalContent}>

            <TopSection handleClose={handleClose} />

            <div className={styles.tweet}>

                <ProfilePhotoTweetbox url={url} />

                <div className={styles.container}>
                    <TweetUserInfo name={name} handle={handle} timeTweeted={timeTweeted} />
                    <TweetText content={content} />

                </div>
            </div>

            <Tweetbox className={styles.Tweetbox} url={url} placeholder="Tweet your reply!" />


        </div>
    );
}

export default CommentIconModal