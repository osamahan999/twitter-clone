import React, { useState, useEffect } from 'react';
import TweetButton from '../../components/TwitterFeed/TweetInputSection/TweetInput/BottomInputSection/TweetButton/TweetButton';
import Tweet from '../../components/TwitterFeed/Tweets/Tweet';
import styles from './ProfileContainer.module.css';
import TopBar from './TopBar/TopBar';

const axios = require('axios');




const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?
const url = "https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg";


function ProfileContainer() {

    const [tweets, setTweets] = useState(null);
    const [getTweets, setGetTweets] = useState(true);

    const [currentTwitterFeed, setCurrentTwitterFeed] = useState("tweet");


    //use of useEffect fixes the double post problem. 
    useEffect(() => {
        if (getTweets) {  //axios get request to get tweet content 
            setGetTweets(false);

            if (currentTwitterFeed == "tweet") {
                axios.get("http://localhost:5000/tweets/getUserTweets", {
                    params: {
                        userID: userUUID
                    }
                }).then((response) => {

                    setTweets(response.data);

                }).catch((error) => {

                    console.log(error)
                })
            } else {
                setTweets(null);
            }


        }

    })

    /**
       * Getting time in seconds, minutes, hours, days, or months for timestamp of tweet
       * @param {} timestamp 
       */
    const getTimeSinceTweeted = (timestamp) => {
        var time = (((new Date().getTime()) - (new Date(timestamp).getTime())) / 1000);

        if (time / 60 <= 1) return Math.floor(time) + "s";
        time /= 60;
        if (time / 60 <= 1) return (Math.floor(time) + "m");
        time /= 60;

        if (time / 24 <= 1) return (Math.floor(time) + "hr");
        time /= 24;

        if (time / 30 <= 1) return (Math.floor(time) + " days");
        time /= 30;

        if (time / 12 <= 1) return (Math.floor(time) + " months");
        time /= 12;

        return (time + " years");


    }

    return (
        <div className={styles.ProfileContainer}>


            <TopBar />

            <div className={styles.Scrollable}>

                <div>
                    <div className={styles.CoverPhoto}>
                        <img src="https://pbs.twimg.com/profile_banners/746513468233179144/1579486343/600x200"></img>
                    </div>

                    <div className={styles.ProfileBio}>
                        <div className={styles.EditProfile}>
                            <button className={styles.EditButton}>Edit Profile</button>
                        </div>

                        <div className={styles.ProfileName}>

                            <div className={styles.Name}>festive tree man</div>
                            <div className={styles.Handle}>@OsamaHansolo</div>

                        </div>


                        <div className={styles.Bio}>big heart, bigger heart issues</div>

                        <div className={styles.PersonalInfo}>
                            {/* {if location public} */ true && <div className={styles.Info}> location </div>}
                            {/* {if DOB public} */ true && <div className={styles.Info}> May 14 1999 </div>}
                            {/* {if join date public} */ true && <div className={styles.Info}> Joined June 2016 </div>}

                        </div>

                        <div className={styles.Follows}>
                            <div className={styles.FollowContainer}>
                                <div className={styles.Amt}>65</div>
                                <div className={styles.AmtOf}>Following</div>
                            </div>
                            <div className={styles.FollowContainer}>
                                <div className={styles.Amt}>55</div>
                                <div className={styles.AmtOf}>Followers</div>
                            </div>

                        </div>
                    </div>


                </div>


                <div className={styles.TweetContentChoices}>
                    <div onClick={() => {
                        setCurrentTwitterFeed("tweet");
                        setGetTweets(true);
                    }} className={styles.Choice}>Tweets</div>

                    <div onClick={() => {
                        setCurrentTwitterFeed("tweet and reply");
                        setGetTweets(true);
                    }} className={styles.Choice}>Tweets & replies</div>

                    <div onClick={() => {
                        setCurrentTwitterFeed("media");
                        setGetTweets(true);
                    }} className={styles.Choice}>Media</div>

                    <div onClick={() => {
                        setCurrentTwitterFeed("like");
                        setGetTweets(true);
                    }} className={styles.Choice}>Likes</div>

                </div>



                <div className={styles.TwitterFeed}>


                    {tweets && tweets.map((tweet) => {

                        return <Tweet

                            updateFeed={() => setGetTweets(true)}
                            tweetUUID={tweet._id}
                            name="Osama"
                            handle="OsamaH"
                            timeTweeted={getTimeSinceTweeted(tweet.createdAt)}
                            content={tweet.tweetBody}
                            url={url}
                            likes={tweet.numOfLikes}

                            // thought this conditional would fix the NaN problem with retweets but thats because
                            //those documents were made without the numOf fields and so it returns undefined
                            retweets={(tweet.numOfRetweetsWithNoComment + tweet.numOfRetweetsWithComment) > -1
                                ? ((tweet.numOfRetweetsWithNoComment + tweet.numOfRetweetsWithComment)) : 0}
                        />

                    })}

                </div>

            </div>




        </div>
    );
}

export default ProfileContainer;
