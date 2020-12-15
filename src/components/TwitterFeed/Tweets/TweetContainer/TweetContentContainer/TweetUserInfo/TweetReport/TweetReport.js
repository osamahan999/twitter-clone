import React, { useState } from 'react';
import ThreeDotsIcon from '../../../../../TweetInputSection/TweetInput/BottomInputSection/BottomIcons/Icons/ThreeDotsIcon/ThreeDotsIcon';

import styles from './TweetReport.module.css';

function TweetReport() {
    return (
        <div className={styles.TweetReport}>
            <ThreeDotsIcon />
        </div>
    );
}

export default TweetReport