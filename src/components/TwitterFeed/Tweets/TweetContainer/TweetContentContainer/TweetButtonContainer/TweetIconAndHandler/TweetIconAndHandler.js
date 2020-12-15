import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon, child, open, handleOpen, handleClose }) {



    return (
        <div className={styles.TweetIconAndHandler}>

            <Icon className={styles.icon} onClick={handleOpen} />

            <Modal open={open} onClose={handleClose} className={styles.tweetModal}>
                {child}
            </Modal>
        </div>
    );
}

export default TweetIconAndHandler