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

    const [amtOfLikes, setAmtOfLikes] = React.useState(props.likes);
    const [amtOfRetweets, setAmtOfRetweets] = React.useState(props.retweets);
    const [isRetweeted, setIsRetweeted] = React.useState(false);

    const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?

    useEffect(() => {

        axios.get("http://localhost:5000/like/isLiked", {
            params: {
                userID: userUUID,
                tweetUUID: props.tweetUUID
            }
        }).then((response) => {


            if ((response.data == 0)) setLiked(false);
            else setLiked(true);


        }).catch((error) => {

            console.log(error)
        })

        axios.get("http://localhost:5000/retweet/isRetweeted", {
            params: {
                userID: userUUID,
                tweetUUID: props.tweetUUID
            }
        }).then((response) => {
            if (response.data == "true") setIsRetweeted(true);
            else setIsRetweeted(false);
        })



    })


    /**
     * If the tweet is liked, it calls the unlike functionality 
     * if it is not liked, it calls the like functonality
     */
    const likeTweet = () => {


        if (!liked) {

            axios.post("http://localhost:5000/like/like", {

                tweetUUID: props.tweetUUID,
                userID: userUUID

            }).then((response) => {
                setLiked(true);

                updateTweetComponent();


            }).catch((error) => console.log(error))
        } else {

            //unlikes
            axios.post("http://localhost:5000/like/unlike", {

                tweetUUID: props.tweetUUID,
                userID: userUUID

            }).then((response) => {
                setLiked(false);
                updateTweetComponent();

            }).catch((error) => console.log(error))


        }

    }


    /**
     * Only updates the actual tweet component when the like happens rather than calling updateFeed()
     */
    const updateTweetComponent = () => {
        axios.get("http://localhost:5000/tweets/getTweet", {
            params: {
                tweetUUID: props.tweetUUID
            }
        }).then((response) => {
            setAmtOfLikes(response.data[0].numOfLikes);
        }).catch((error) => console.log(error))
    }


    return (
        <div className={styles.TweetButtonContainer}>

            {/* 4 buttons here  */}
            <TweetIconAndHandler

                Icon={CommentIcon}
                handleClose={() => setCommentOpen(false)}
                handleOpen={() => {
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
                isActivated={isRetweeted}

                data={amtOfRetweets}

                handleClose={() => setRetweetOpen(false)}
                handleOpen={() => setRetweetOpen(true)}


                child={
                    <RetweetIconModal
                        updateRetweets={(e) => setAmtOfRetweets(e)}
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

            {liked ?
                <div className={styles.likeIconAndLikes}>

                    <LikeIcon
                        className={styles.LikeIconLiked}
                        onClick={() => likeTweet()}
                    />
                    <p>{amtOfLikes}</p>

                </div>
                :
                <div className={styles.likeIconAndLikes} >
                    <LikeIcon
                        onClick={() => likeTweet()}
                    />

                    <p>{amtOfLikes}</p>
                </div>

            }





            <TweetIconAndHandler Icon={ShareIcon} name={props.name} handle={props.handle} timeTweeted={props.timeTweeted} url={props.url} content={props.content} />


        </div >
    );
}

export default TweetButtonContainer