import React, { useState, useEffect } from 'react';

import TweetUserInfo from '../../TweetUserInfo/TweetUserInfo'
import TweetText from '../../TweetText/TweetText'

import styles from './RetweetIconModal.module.css';
import ProfilePhotoTweetbox from '../../../../../ProfilePhotoTweetBox/ProfilePhotoTweetBox';

import TweetInput from '../../../../../TweetInputSection/TweetInput/TweetInput';
import BottomInputSection from '../../../../../TweetInputSection/TweetInput/BottomInputSection/BottomInputSection';
import TopSection from '../../../../../TweetInputSection/TweetInput/TopSection/TopSection';

const axios = require('axios');



const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?



function RetweetIconModal({ updateRetweets, tweetUUID, name, handle, timeTweeted, url, content, handleClose }) {

    const [tweetContent, setTweetContent] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [submissionReceivedByChild, setSubmissionReceivedByChild] = useState(false);
    const [tweetClicked, setTweetClicked] = useState(false);

    useEffect(() => {
        if (tweetClicked) {
            setSubmitted(true);

            if (tweetContent) {

                // tweetUUID is the parent tweet!!!

                axios.post("http://localhost:5000/tweets/addRetweet", {
                    userID: userUUID,
                    tweetBody: tweetContent,
                    tweetUUID: tweetUUID
                }).then((response) => {

                    updateTweetComponent();
                    console.log(response.data);
                }).catch((error) => {

                    console.log(error)
                })


            } else {

                handleClose();

                axios.post("http://localhost:5000/tweets/addRetweetWithNoComment", {
                    userID: userUUID,
                    tweetUUID: tweetUUID
                }).then((response) => {
                    updateTweetComponent();

                    console.log(response.data);

                }).catch((error) => {

                    console.log(error)
                })


            }
        }

        setTweetClicked(false);

    })

    /**
       * Only updates the actual tweet component when the retweet happens rather than calling updateFeed()
       */
    const updateTweetComponent = () => {
        axios.get("http://localhost:5000/tweets/getTweet", {
            params: {
                tweetUUID: tweetUUID
            }
        }).then((response) => {

            updateRetweets(response.data[0].numOfRetweetsWithNoComment + response.data[0].numOfRetweetsWithComment);


        }).catch((error) => console.log(error))
    }

    //this should be componentalized a bit more but for now i just wanna get it down
    return (
        <div className={styles.RetweetIconModal}>

            <TopSection handleClose={handleClose} />

            <div className={styles.tweet}>

                <ProfilePhotoTweetbox url={url} />
                <div className={styles.container}>
                    <TweetInput
                        handleSubmit={(e) => setTweetContent(e)}
                        isSubmitted={submitted}
                        submissionReceived={() => setSubmissionReceivedByChild(true)}
                        placeholder="retweet"
                    />

                    <div className={styles.tweetWrapper}>

                        <div className={styles.header}>
                            <img alt="" draggable="true"
                                src={url} className={styles.image}>
                            </img>

                            <TweetUserInfo name={name} handle={handle} timeTweeted={timeTweeted} />
                        </div>


                        <TweetText content={content} />

                    </div>
                    <p>THIS IS DATA FROM SERVER Everyone can reply</p>

                    <BottomInputSection handleClick={() => setTweetClicked(true)} />

                </div>

            </div>



        </div>
    );
}

export default RetweetIconModal