import React, { useState } from 'react';

import ProfilePhotoTweetBox from '../../../../../../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetUserInfo from '../../../TweetUserInfo/TweetUserInfo'
import TweetText from '../../../TweetText/TweetText'

import styles from './CommentIconModal.module.css';
import TweetInputSection from '../../../../../../TweetInputSection/TweetInputSection';
import TweetInput from '../../../../../../TweetInputSection/TweetInput/TweetInput';

function CommentIconModal({ Icon, name, handle, timeTweeted, url, content }) {


    return (
        <div className={styles.tweetModalContent}>

            <ProfilePhotoTweetBox url={url} />
            <div className={styles.container}>
                <TweetUserInfo name={name} handle={handle} timeTweeted={timeTweeted} />
                <TweetText content={content} />

                <TweetInput className={styles.retweetText} />

            </div>
        </div>
    );
}

export default CommentIconModal