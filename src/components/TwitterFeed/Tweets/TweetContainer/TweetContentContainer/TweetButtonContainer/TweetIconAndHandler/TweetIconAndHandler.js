import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon, isActivated, child, data, open, handleOpen, handleClose }) {


    const retweetActivated = () => {
        return (

            <div className={styles.containerRetweet}>
                <Icon className={styles.icon} onClick={handleOpen} />
                <p>{data}</p>
            </div>
        );
    }
    const defaultUnactivated = () => {
        return (

            <div className={styles.container}>
                <Icon className={styles.icon} onClick={handleOpen} />
                <p>{data}</p>
            </div>
        );
    }


    return (
        <div className={styles.TweetIconAndHandler}>



            {isActivated && Icon.name == "RetweetIcon" ? retweetActivated() : defaultUnactivated()}


            <Modal open={open} onClose={handleClose} className={styles.tweetModal}>
                {child}
            </Modal>
        </div>
    );
}

export default TweetIconAndHandler