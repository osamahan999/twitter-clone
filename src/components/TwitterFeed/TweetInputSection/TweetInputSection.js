import React, { useEffect, useState } from 'react';

import styles from './TweetInputSection.module.css';
import TweetInput from './TweetInput/TweetInput';
import BottomInputSection from './TweetInput/BottomInputSection/BottomInputSection';

const axios = require('axios');


function TweetInputSection(props) {
    const [tweetContent, setTweetContent] = useState(null);
    const [tweetClicked, setTweetClicked] = useState(false);
    const [tweetSubmitted, setTweetSubmitted] = useState(false);
    const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?



    useEffect(() => {
        if (tweetClicked) {
            console.log(setTweetSubmitted(true));

            console.log("tweet clicked " + tweetClicked + " tweetSubmitted " + tweetSubmitted);



            if (tweetContent) {

                axios.post("http://localhost:5000/tweets/add", {
                    userID: userUUID,
                    tweetBody: tweetContent

                }).then((response) => {

                    { props.updateFeed() };

                    console.log(response.data);
                }).catch((error) => {

                    console.log(error)
                })

                console.log(tweetContent);
            }
        }

        setTweetClicked(false);

    })





    return (
        <div className={styles.TweetInputSection}>
            <TweetInput
                placeholder={props.placeholder}
                submissionReceived={() => setTweetSubmitted(false)}
                isSubmitted={tweetSubmitted}
                handleSubmit={(content) => setTweetContent(content)}
            />

            <BottomInputSection handleClick={() => setTweetClicked(true)} />

        </div>

    );
}

export default TweetInputSection