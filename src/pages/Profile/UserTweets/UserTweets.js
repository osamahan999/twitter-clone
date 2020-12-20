import React, { useState, useEffect } from 'react';

import Tweet from '../../../components/TwitterFeed/Tweets/Tweet';
import styles from './UserTweets.module.css';

const axios = require('axios');

function UserTweets(props) {

    const [tweets, setTweets] = useState(null);

    //use of useEffect fixes the double post problem. 
    useEffect(() => {


        if (props.currentFeed == "tweet") {
            axios.get("http://localhost:5000/tweets/getUserTweets", {
                params: {
                    userID: props.userID
                }
            }).then((response) => {

                setTweets(response.data);

            }).catch((error) => {

                console.log(error)
            })
        } else if (props.currentFeed == "like") {

            axios.get("http://localhost:5000/like/getLikes", {
                params: {
                    _id: props.userID
                }
            }).then((response) => {

                setTweets(response.data);

            }).catch((error) => {

                console.log(error)
            })

        }

        else {
            setTweets(null);
        }



    }, [props.currentFeed])

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

        <div className={styles.TwitterFeed}>


            {tweets && tweets.map((tweet) => {


                return <Tweet

                    tweetUUID={tweet._id}
                    name="Osama"
                    handle="OsamaH"
                    timeTweeted={getTimeSinceTweeted(tweet.createdAt)}
                    content={tweet.tweetBody}
                    url={props.url}
                    likes={tweet.numOfLikes}

                    // thought this conditional would fix the NaN problem with retweets but thats because
                    //those documents were made without the numOf fields and so it returns undefined
                    retweets={(tweet.numOfRetweetsWithNoComment + tweet.numOfRetweetsWithComment) > -1
                        ? ((tweet.numOfRetweetsWithNoComment + tweet.numOfRetweetsWithComment)) : 0}
                />

            })}

        </div>





    );
}

export default UserTweets;
