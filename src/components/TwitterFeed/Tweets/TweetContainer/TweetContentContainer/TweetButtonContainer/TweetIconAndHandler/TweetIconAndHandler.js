import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";

import TweetButton from '../TweetButton/TweetButton'
import CommentIconModal from './CommentIconModal/CommentIconModal'
import styles from './TweetIconAndHandler.module.css';

function TweetIconAndHandler({ Icon, name, handle, timeTweeted, url, content }) {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //cleaner return statement down below by simpyl putting this div in this const
    const getCommentIconModal = () => {
        return (<CommentIconModal name={name} url={url} content={content} timeTweeted={timeTweeted} handle={handle} />);
    }


    const getRetweetIconModal = () => {
        return (<CommentIconModal name={name} url={url} content={content} timeTweeted={timeTweeted} handle={handle} />);

    }

    return (
        <div className={styles.TweetIconAndHandler}>

            <TweetButton Icon={Icon} handlerFunction={handleOpen} />

            <Modal open={open} onClose={handleClose} className={styles.tweetModal}>
                {(Icon.name == "CommentIcon" && getCommentIconModal())
                    || (Icon.name == "RetweetIcon" && getCommentIconModal())}

            </Modal>
        </div>
    );
}

export default TweetIconAndHandler