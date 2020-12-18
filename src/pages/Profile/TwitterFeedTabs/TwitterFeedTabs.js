import React, { useState, useEffect } from 'react';

import styles from './TwitterFeedTabs.module.css';




function TwitterFeedTabs(props) {


    return (

        <div className={styles.TwitterFeedTabs}>
            <div onClick={() => {
                props.handleClick("tweet");
                props.updateTweets();


            }} className={props.currentFeed == "tweet" ? styles.Chosen : styles.Choice}>Tweets</div>

            <div onClick={() => {
                props.handleClick("tweet and reply");
                props.updateTweets();
            }} className={props.currentFeed == "tweet and reply" ? styles.Chosen : styles.Choice}>Tweets & replies</div>

            <div onClick={() => {
                props.handleClick("media");
                props.updateTweets();
            }} className={props.currentFeed == "media" ? styles.Chosen : styles.Choice}>Media</div>

            <div onClick={() => {
                props.handleClick("like");
                props.updateTweets();
            }} className={props.currentFeed == "like" ? styles.Chosen : styles.Choice}>Likes</div>

        </div>



    );
}

export default TwitterFeedTabs;