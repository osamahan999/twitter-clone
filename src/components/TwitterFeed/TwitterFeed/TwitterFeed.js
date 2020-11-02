import React, { useState } from 'react';

import styles from './TwitterFeed.module.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'
import Tweet from '../Tweets/Tweet'


function TwitterFeed() {
  return (
    <div className={styles.TwitterFeed}>
      <HomeTopBar />
      <Tweetbox />
      <Tweet />
      {/* here we have a compnent for each tweet from the database */}
    </div>
  );
}

export default TwitterFeed