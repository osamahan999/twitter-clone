import React, { useState } from 'react';

import styles from './TwitterFeed.module.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'
import Tweet from '../Tweets/Tweet'

//axios get request to get tweet content 



function TwitterFeed() {
  const url = "https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg";

  return (
    <div className={styles.TwitterFeed}>
      <HomeTopBar />
      <Tweetbox className={styles.Tweetbox} url={url} placeholder="What's happening?" />


      <Tweet name="Sam" handle="SamLouder" timeTweeted="1hr" content="love dogs" url={url} />
      <Tweet name="Osama" handle="OsamaH" timeTweeted="1hr" content="Hate dogs" url={url} />
      <Tweet name="John" handle="BigJohn" timeTweeted="1hr" content="love cats!" url={url} />
      <Tweet name="Carl" handle="CarlSayAgain" timeTweeted="1hr" content="love frogs!" url={url} />


      {/* here we have a compnent for each tweet from the database */}
    </div>
  );
}

export default TwitterFeed