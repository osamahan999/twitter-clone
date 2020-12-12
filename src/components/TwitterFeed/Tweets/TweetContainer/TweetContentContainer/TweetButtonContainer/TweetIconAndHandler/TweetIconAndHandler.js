import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import TweetButton from '../TweetButton/TweetButton'
import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon, child }) {
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
                {child}
            </Modal>
        </div>
    );
}

export default TweetIconAndHandler