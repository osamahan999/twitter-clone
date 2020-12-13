import React, { useState } from 'react';

import TweetUserInfo from '../../TweetUserInfo/TweetUserInfo'
import TweetText from '../../TweetText/TweetText'

import styles from './RetweetIconModal.module.css';
import ProfilePhotoTweetbox from '../../../../../ProfilePhotoTweetBox/ProfilePhotoTweetBox';

import TweetInput from '../../../../../TweetInputSection/TweetInput/TweetInput';
import BottomInputSection from '../../../../../TweetInputSection/TweetInput/BottomInputSection/BottomInputSection';
import TopSection from '../../../../../TweetInputSection/TweetInput/TopSection/TopSection';

function RetweetIconModal({ Icon, name, handle, timeTweeted, url, content, handleClose }) {


    //this should be componentalized a bit more but for now i just wanna get it down
    return (
        <div className={styles.RetweetIconModal}>

            <TopSection handleClose={handleClose} />

            <div className={styles.tweet}>

                <ProfilePhotoTweetbox url={url} />
                <div className={styles.container}>
                    <TweetInput placeholder="retweet" />

                    <div className={styles.tweetWrapper}>

                        <div className={styles.header}>
                            <img className={styles.image} src={url}></img>
                            <TweetUserInfo name={name} handle={handle} timeTweeted={timeTweeted} />
                        </div>


                        <TweetText content={content} />

                    </div>
                    <p>THIS IS DATA FROM SERVER Everyone can reply</p>

                    <BottomInputSection />

                </div>

            </div>



        </div>
    );
}

export default RetweetIconModal