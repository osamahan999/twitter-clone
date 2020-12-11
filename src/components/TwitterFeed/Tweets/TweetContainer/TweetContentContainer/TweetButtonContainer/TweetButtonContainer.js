import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import CommentIcon from './TweetIcons/CommentIcon'
import TweetIconAndHandler from './TweetIconAndHandler/TweetIconAndHandler'
import RetweetIcon from './TweetIcons/RetweetIcon';
import LikeIcon from './TweetIcons/LikeIcon';
import ShareIcon from './TweetIcons/ShareIcon';
import styles from './TweetButtonContainer.module.css';

function TweetButtonContainer() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.TweetButtonContainer}>

            {/* 4 buttons here  */}
            <TweetIconAndHandler Icon={CommentIcon} />
            <TweetIconAndHandler Icon={RetweetIcon} />
            <TweetIconAndHandler Icon={LikeIcon} />
            <TweetIconAndHandler Icon={ShareIcon} />


        </div>
    );
}

export default TweetButtonContainer