import React, { useState } from 'react';

import './TwitterFeed.css';
import HomeTopBar from '../HomeTopbar/HomeTopbar'
import Tweetbox from '../Tweetbox/Tweetbox'

function TwitterFeed() {
  return (
    <div className="TwitterFeed">
      <HomeTopBar />
      <Tweetbox />
    </div>
  );
}

export default TwitterFeed