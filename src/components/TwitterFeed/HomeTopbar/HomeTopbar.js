import React, { useState } from 'react';

import styles from './HomeTopbar.module.css';


function HomeTopBar() {
    return (
        <div className={styles.HomeTopBar}>
            <p className={styles.HomeText} >Home</p>
            <p className={styles.HomeStarIcon}>Star</p>
        </div>
    );
}

export default HomeTopBar