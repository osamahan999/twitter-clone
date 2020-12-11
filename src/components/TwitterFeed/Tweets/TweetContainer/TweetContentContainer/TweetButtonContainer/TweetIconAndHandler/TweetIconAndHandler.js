import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import TweetButton from '../TweetButton/TweetButton'
import ProfilePhotoTweetBox from '../../../../../ProfilePhotoTweetBox/ProfilePhotoTweetBox'
import TweetUserInfo from '../../TweetUserInfo/TweetUserInfo'
import TweetText from '../../TweetText/TweetText'

import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon, name, handle, timeTweeted, url, content }) {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.TweetIconAndHandler}>

            <TweetButton Icon={Icon} handlerFunction={handleOpen} />

            <Modal open={open} onClose={handleClose} className={styles.tweetModal}>
                <div className={styles.tweetModalContent}>
                    <ProfilePhotoTweetBox url={url} />
                    <div>


                        <TweetUserInfo name={name} handle={handle} timeTweeted={timeTweeted} />

                        <TweetText content={content} />
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default TweetIconAndHandler