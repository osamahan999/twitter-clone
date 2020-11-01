import React, { useState } from 'react';

import styles from './HomeTopbar.module.css';


function HomeTopBar() {
    return (
        <div className={styles.HomeTopBar}>
            <p id="HomeText">Home</p>
            <p id="HomeStarIcon">Star</p>
        </div>
    );
}

export default HomeTopBar