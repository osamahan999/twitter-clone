import React, { useState, useEffect } from 'react';
import BackArrowIcon from '../../../components/TwitterFeed/TweetInputSection/TweetInput/BottomInputSection/BottomIcons/Icons/BackArrowIcon/BackArrowIcon';

import styles from './TopBar.module.css';

const userUUID = "5fd8983dc0bee625f4526ace"; //a user's id which we wil be storing probably using contexts?


const axios = require('axios');


function TopBar(props) {



    return (
        <div className={styles.TopBar}>

            {/* Tried to perhaps center as a row and as a column to get it in the middle but didnt work */}
            <div className={styles.IconHorizontalAlign}>
                <BackArrowIcon className={styles.Icon} />
            </div>

            <div className={styles.TopBarNameTweets}>
                <div className={styles.Name}>festive tree man</div>
                <div className={styles.TweetCount}>631 Tweets</div>

            </div>

        </div>
    );
}

export default TopBar;
