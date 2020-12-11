import React, { useState } from 'react';

import styles from './TwitterFeed.module.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'
import Tweet from '../Tweets/Tweet'

//axios get request to get tweet content 



function TwitterFeed() {
  return (
    <div className={styles.TwitterFeed}>
      <HomeTopBar />
      <Tweetbox />


      <Tweet name="Sam" handle="Huge cock sam" timeTweeted="1hr" content="love men" url="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg" />
      <Tweet name="Osama" handle="Huge cock sam" timeTweeted="1hr" content="llove menlove menlove menove men" url="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg" />
      <Tweet name="John" handle="Huge cock sam" timeTweeted="1hr" content="love mlove menen" url="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg" />
      <Tweet name="Carl" handle="Huge cock sam" timeTweeted="1hr" content="lovelove menlove menlove menlove menlove men men" url="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg" />


      {/* here we have a compnent for each tweet from the database */}
    </div>
  );
}

export default TwitterFeed