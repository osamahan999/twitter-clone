import React, { useState } from 'react';

import TweetUserInfo from './TweetUserInfo/TweetUserInfo'
import TweetText from './TweetText/TweetText'
import TweetButtonContainer from './TweetButtonContainer/TweetButtonContainer'
import styles from './TweetContentContainer.module.css';

function TweetContentContainer(props) {



    return (
        <div className={styles.TweetContentContainer}>
            <TweetUserInfo name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} />

            <TweetText content={props.content} />

            <TweetButtonContainer name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />
        </div>
    );
}

export default TweetContentContainer