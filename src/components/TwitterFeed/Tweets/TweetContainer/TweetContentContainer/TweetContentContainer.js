import React, { useState } from 'react';

import TweetUserInfo from './TweetUserInfo/TweetUserInfo'
import TweetText from './TweetText/TweetText'
import TweetButtonContainer from './TweetButtonContainer/TweetButtonContainer'
import styles from './TweetContentContainer.module.css';

function TweetContentContainer(props) {
    return (
        <div className={styles.TweetContentContainer}>
            {/* username and time */}
            <TweetUserInfo name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} />
            {/* tweet text */}
            <TweetText content={props.content} />

            {/* tweet images */}

            {/* tweet buttons */}

            <TweetButtonContainer />
        </div>
    );
}

export default TweetContentContainer