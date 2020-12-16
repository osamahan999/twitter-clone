import React, { useEffect, useState } from 'react';

import CommentIcon from './TweetIcons/CommentIcon'
import TweetIconAndHandler from './TweetIconAndHandler/TweetIconAndHandler'
import RetweetIcon from './TweetIcons/RetweetIcon';
import LikeIcon from './TweetIcons/LikeIcon';
import ShareIcon from './TweetIcons/ShareIcon';
import styles from './TweetButtonContainer.module.css';
import CommentIconModal from './CommentIconModal/CommentIconModal';
import RetweetIconModal from './RetweetIconModal/RetweetIconModal';

const axios = require('axios');

function TweetButtonContainer(props) {

    const [commentOpen, setCommentOpen] = React.useState(false);
    const [retweetOpen, setRetweetOpen] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?

    useEffect(() => {


        axios.get("http://localhost:5000/tweets/isLiked", {
            params: {
                userID: userUUID,
                tweetUUID: props.tweetUUID
            }
        }).then((response) => {
            console.log(response.data);


            if ((response.data == 0)) setLiked(false);
            else setLiked(true);


        }).catch((error) => {

            console.log(error)
        })





    })


    const likeTweet = () => {


        if (!liked) {

            axios.post("http://localhost:5000/tweets/like", {

                tweetUUID: props.tweetUUID,
                userID: userUUID

            }).then((response) => {
                setLiked(true);

            })
        } else {

            //unlikes
            axios.post("http://localhost:5000/tweets/unlike", {

                tweetUUID: props.tweetUUID,
                userID: userUUID

            }).then((response) => {
                setLiked(false);

            })


        }

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
                    <RetweetIconModal
                        tweetUUID={props.tweetUUID}
                        name={props.name}
                        url={props.url}
                        content={props.content}
                        timeTweeted={props.timeTweeted}
                        handle={props.handle}
                        handleClose={() => setRetweetOpen(false)}

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