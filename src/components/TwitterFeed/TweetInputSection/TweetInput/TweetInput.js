import React, { useState } from 'react';

import styles from './TweetInput.module.css';
import BottomInputSection from './BottomInputSection/BottomInputSection';

function TweetInput() {
    return (
        <div>

            <div className={styles.TweetInput} >
                <textarea type="text" className={styles.textbox} placeholder="What's happening?"></textarea>
            </div>

            <BottomInputSection />
        </div>
    );
}

export default TweetInput