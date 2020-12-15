import React, { useEffect, useState } from 'react';

import styles from './TweetInput.module.css';
import BottomInputSection from './BottomInputSection/BottomInputSection';

function TweetInput(props) {

    const [content, setContent] = useState(null);

    useEffect(() => {
        { props.handleSubmit(content) };

        if (props.isSubmitted) {

            { props.submissionReceived() };
        }
    })

    return (

        <div>

            <div className={styles.TweetInput} >
                <textarea onChange={(event) => setContent(event.target.value)} type="text" className={styles.textbox} placeholder={props.placeholder}></textarea>
            </div>

        </div>
    );
}

export default TweetInput