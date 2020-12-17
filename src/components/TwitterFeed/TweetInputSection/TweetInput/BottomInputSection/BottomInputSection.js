import React, { useState } from 'react';

import BottomIcons from './BottomIcons/BottomIcons'
import TweetButton from './TweetButton/TweetButton'
import styles from './BottomInputSection.module.css';

function BottomInputSection(props) {
    return (
        <div className={styles.BottomInputSection}>
            <BottomIcons />
            <TweetButton handleClick={props.handleClick} />
        </div>
    );
}

export default BottomInputSection