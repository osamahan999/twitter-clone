import React, { useState } from 'react';

import CommentIcon from './TweetIcons/CommentIcon'
import TweetButton from './TweetButton/TweetButton'
import RetweetIcon from './TweetIcons/RetweetIcon';
import LikeIcon from './TweetIcons/LikeIcon';
import ShareIcon from './TweetIcons/ShareIcon';
import styles from './TweetButtonContainer.module.css';

function TweetButtonContainer() {
    return (
        <div className={styles.TweetButtonContainer}>

            {/* 4 buttons here  */}
            <TweetButton Icon={CommentIcon} />
            <TweetButton Icon={RetweetIcon} />
            <TweetButton Icon={LikeIcon} />
            <TweetButton Icon={ShareIcon} />

        </div>
    );
}

export default TweetButtonContainer