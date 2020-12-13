import React, { useState } from 'react';

import styles from './TopSection.module.css';

function TopSection(props) {
    return (
        <div className={styles.TopSection}>
            <button onClick={props.handleClose}>X</button>

            <button>Unsent Tweets</button>

        </div>
    );
}

export default TopSection