import React, { useState } from 'react';

import styles from './TweetInputSection.module.css';
import TweetInput from './TweetInput/TweetInput';
import BottomInputSection from './TweetInput/BottomInputSection/BottomInputSection';

function TweetInputSection() {
    return (
        <div className={styles.TweetInputSection}>
            <TweetInput />

            <BottomInputSection />

        </div>

    );
}

export default TweetInputSection