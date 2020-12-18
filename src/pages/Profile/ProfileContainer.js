import React, { useState } from 'react';


import styles from './ProfileContainer.module.css';
import TopBar from './TopBar/TopBar';

import ProfileInfoSection from './ProfileInfoSection/ProfileInfoSection';
import TwitterFeedTabs from './TwitterFeedTabs/TwitterFeedTabs';
import UserTweets from './UserTweets/UserTweets';


const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?
const url = "https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_normal.jpg";


function ProfileContainer(props) {

    const [getTweets, setGetTweets] = useState(true);
    const [currentTwitterFeed, setCurrentTwitterFeed] = useState("tweet");

    return (
        <div className={styles.ProfileContainer}>


            <TopBar />

            <div className={styles.Scrollable}>

                <ProfileInfoSection

                    profilePicUrl="https://pbs.twimg.com/profile_images/1304851858142294016/sjdpxN6r_200x200.jpg"
                    profileName="festive tree man"
                    profileHandle="@OsamaHansolo"
                    profileBio="big heart, bigger heart issues"
                    profileFollowers="55"
                    profileFollowing="65"

                />


                {/* The tabs for switching between media, lieks, etc */}
                <TwitterFeedTabs
                    handleClick={(e) => setCurrentTwitterFeed(e)}
                    updateTweets={() => setGetTweets(true)}
                    currentFeed={currentTwitterFeed}

                />



                <UserTweets

                    url={url}
                    userID={userUUID}
                    updateFeed={getTweets}
                    feedUpdated={() => setGetTweets(false)}
                    feedNeedsUpdating={() => setGetTweets(true)}
                    currentFeed={currentTwitterFeed}

                />

            </div>




        </div>
    );
}

export default ProfileContainer;
