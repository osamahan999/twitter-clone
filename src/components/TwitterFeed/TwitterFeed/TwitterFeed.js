import React, { useState } from 'react';

import styles from './TwitterFeed.module.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'

function TwitterFeed() {
  return (
    <div className={styles.TwitterFeed}>
      <HomeTopBar />
      <Tweetbox />
    </div>
  );
}

export default TwitterFeed