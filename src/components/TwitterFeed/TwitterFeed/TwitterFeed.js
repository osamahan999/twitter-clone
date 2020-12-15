import React, { useState } from 'react';

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


  if (getTweets) {  //axios get request to get tweet content 
    setGetTweets(false);


    axios.get("http://localhost:5000/tweets/getUserTweets", {
      params: {
        userID: userUUID
      }
    }).then((response) => {

      setTweets(response.data);


      console.log(response.data);
    }).catch((error) => {

      console.log(error)
    })
  }

  return (
    <div className={styles.TwitterFeed}>
      <HomeTopBar />
      <Tweetbox updateFeed={() => setGetTweets(true)} className={styles.Tweetbox} url={url} placeholder="What's happening?" />


      {/*returns each tweet from a user. obv not what we want but a start!!!  */}


      {tweets && tweets.map((tweet) => {

        return <Tweet name="Osama" handle="OsamaH" timeTweeted={tweet.createdAt} content={tweet.tweetBody} url={url} />

      })}

    </div>
  );
}

export default TwitterFeed