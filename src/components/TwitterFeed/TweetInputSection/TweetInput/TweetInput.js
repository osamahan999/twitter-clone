import React, { useState } from 'react';

import styles from './TweetInput.module.css';
import BottomInputSection from './BottomInputSection/BottomInputSection';

function TweetInput(props) {
    return (
        <div>

            <div className={styles.TweetInput} >
                <textarea type="text" className={styles.textbox} placeholder={props.placeholder}></textarea>
            </div>

        </div>
    );
}

export default TweetInput