import React, { useState } from 'react';

import styles from './TweetInputSection.module.css';
import TweetInput from './TweetInput/TweetInput';
import BottomInputSection from './TweetInput/BottomInputSection/BottomInputSection';

function TweetInputSection(props) {
    return (
        <div className={styles.TweetInputSection}>
            <TweetInput placeholder={props.placeholder} />

            <BottomInputSection />

        </div>

    );
}

export default TweetInputSection