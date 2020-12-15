import React, { useState } from 'react';

import styles from './BottomIcons.module.css';
import GifIcon from './Icons/GifIcon/GifIcon';
import ImageIcon from './Icons/ImageIcon/ImageIcon';
import PollIcon from './Icons/PollIcon/PollIcon';
import EmojiIcon from './Icons/EmojiIcon/EmojiIcon';
import CalenderIcon from './Icons/CalenderIcon/CalenderIcon';

function BottomIcons() {
    return (
        <div className={styles.icons}>
            <ImageIcon />
            <GifIcon />
            <PollIcon />
            <EmojiIcon />
            <CalenderIcon />
        </div>

    );
}

export default BottomIcons