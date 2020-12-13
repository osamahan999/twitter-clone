import React, { useState } from 'react';

import styles from './HomeTopbar.module.css';
import StarIcon from './StarIcon/StarIcon';


function HomeTopBar() {
    return (
        <div className={styles.HomeTopBar}>
            <p className={styles.HomeText} >Home</p>
            <div className={styles.HomeStarIcon}>
                <StarIcon />
            </div>
        </div>
    );
}

export default HomeTopBar