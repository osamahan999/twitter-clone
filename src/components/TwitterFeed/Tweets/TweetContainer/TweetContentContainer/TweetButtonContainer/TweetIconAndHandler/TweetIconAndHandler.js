import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import TweetButton from '../TweetButton/TweetButton'

import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon }) {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.TweetIconAndHandler}>

            {/* 4 buttons here  */}
            <TweetButton Icon={Icon} handlerFunction={handleOpen} />

            <Modal open={open} onClose={handleClose} className={styles.tweetModal}>
                <div className={styles.tweetModalContent}> {Icon.name}</div>
            </Modal>
        </div>
    );
}

export default TweetIconAndHandler