import React, { useState } from 'react';

import TweetUserInfo from './TweetUserInfo/TweetUserInfo'
import TweetButtonContainer from './TweetButtonContainer/TweetButtonContainer'
import styles from './TweetContentContainer.module.css';

function TweetContentContainer(props) {



    return (
        <div className={styles.TweetContentContainer}>
            <TweetUserInfo name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} />

            <div className={styles.TweetText}>
                <p className={styles.TweetTextContent}>{props.content}</p>
            </div>

            <TweetButtonContainer

                updateFeed={props.updateFeed}
                likes={props.likes}
                tweetUUID={props.tweetUUID}
                name={props.name}
                handle={props.handle}
                timeTweeted={props.timeTweeted}
                url={props.url}
                content={props.content}
            />
        </div>
    );
}

export default TweetContentContainer