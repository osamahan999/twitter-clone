import React, { useEffect, useState } from 'react';

import styles from './TwitterFeed.module.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'
import Tweet from '../Tweets/Tweet'

const axios = require('axios');

/**
 * Temporary identification variables
 */
const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?
const url = "https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg";





function TwitterFeed() {

  const [tweets, setTweets] = useState(null);
  const [getTweets, setGetTweets] = useState(true);


  //use of useEffect fixes the double post problem. 
  useEffect(() => {
    if (getTweets) {  //axios get request to get tweet content 
      setGetTweets(false);


      axios.get("http://localhost:5000/tweets/getUserTweets", {
        params: {
          userID: userUUID
        }
      }).then((response) => {

        setTweets(response.data);

      }).catch((error) => {

        console.log(error)
      })
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

    <div className={styles.TopBar}>
      <HomeTopBar />

      <div className={styles.TwitterFeed}>


        <Tweetbox updateFeed={() => setGetTweets(true)} className={styles.Tweetbox} url={url} placeholder="What's happening?" />


        {/*returns each tweet from a user. obv not what we want but a start!!!  */}


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
            retweets={tweet.numOfRetweetsWithNoComment + tweet.numOfRetweetsWithComment}
          />

        })}

      </div>
    </div>

  );
}

export default TwitterFeed