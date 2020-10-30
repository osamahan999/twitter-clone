import React, { useState } from 'react';

import '../css/TwitterFeed.css';


function HomeTopBar() {
    return (
        <div className="HomeTopBar">
            <p id="HomeText">Home</p>
            <p id="HomeStarIcon">Star</p>
        </div>
    );
}

export default HomeTopBar