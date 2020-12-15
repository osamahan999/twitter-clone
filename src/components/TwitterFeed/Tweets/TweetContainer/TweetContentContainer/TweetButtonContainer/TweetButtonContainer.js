import React, { useState } from 'react';

import CommentIcon from './TweetIcons/CommentIcon'
import TweetIconAndHandler from './TweetIconAndHandler/TweetIconAndHandler'
import RetweetIcon from './TweetIcons/RetweetIcon';
import LikeIcon from './TweetIcons/LikeIcon';
import ShareIcon from './TweetIcons/ShareIcon';
import styles from './TweetButtonContainer.module.css';
import CommentIconModal from './CommentIconModal/CommentIconModal';
import RetweetIconModal from './RetweetIconModal/RetweetIconModal';

function TweetButtonContainer(props) {

    const [commentOpen, setCommentOpen] = React.useState(false);
    const [retweetOpen, setRetweetOpen] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    const likeTweet = () => {

        const newVal = !liked;


        //send like to server
        //if success, return the icon that is colored in

        const success = true;

        success ? setLiked(newVal) : console.log("error");
    }


    return (
        <div className={styles.TweetButtonContainer}>

            {/* 4 buttons here  */}
            <TweetIconAndHandler

                Icon={CommentIcon}
                handleClose={() => setCommentOpen(false)}
                handleOpen={() => {
                    console.log("test");
                    setCommentOpen(true);
                }}


                child={
                    <CommentIconModal name={props.name} url={props.url} content={props.content}
                        timeTweeted={props.timeTweeted} handle={props.handle} handleClose={() => setCommentOpen(false)}
                    />
                }

                open={commentOpen}


            />


            <TweetIconAndHandler
                Icon={RetweetIcon}

                handleClose={() => setRetweetOpen(false)}
                handleOpen={() => setRetweetOpen(true)}

                child={
                    <RetweetIconModal name={props.name} url={props.url} content={props.content}
                        timeTweeted={props.timeTweeted} handle={props.handle} handleClose={() => setRetweetOpen(false)}

                    />
                }

                open={retweetOpen}

            />

            {liked ? <LikeIcon className={styles.LikeIconLiked} onClick={() => likeTweet()} /> : <LikeIcon onClick={() => likeTweet()} />}





            <TweetIconAndHandler Icon={ShareIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />


        </div>
    );
}

export default TweetButtonContainer