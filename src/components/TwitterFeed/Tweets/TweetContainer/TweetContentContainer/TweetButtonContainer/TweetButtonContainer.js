import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import CommentIcon from './TweetIcons/CommentIcon'
import TweetIconAndHandler from './TweetIconAndHandler/TweetIconAndHandler'
import RetweetIcon from './TweetIcons/RetweetIcon';
import LikeIcon from './TweetIcons/LikeIcon';
import ShareIcon from './TweetIcons/ShareIcon';
import styles from './TweetButtonContainer.module.css';

function TweetButtonContainer(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.TweetButtonContainer}>

            {/* 4 buttons here  */}
            <TweetIconAndHandler Icon={CommentIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />
            <TweetIconAndHandler Icon={RetweetIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />
            <TweetIconAndHandler Icon={LikeIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />
            <TweetIconAndHandler Icon={ShareIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />


        </div>
    );
}

export default TweetButtonContainer