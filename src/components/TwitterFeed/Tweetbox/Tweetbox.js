import React, { useState } from 'react';

import './Tweetbox.css';
import ProfilePhotoTweetBox from '../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetInputSection from '../TweetInputSection/TweetInputSection'

function Tweetbox() {
    return (
        <div className="Tweetbox">
            <ProfilePhotoTweetBox />
            <TweetInputSection />
        </div>
    );
}

export default Tweetbox