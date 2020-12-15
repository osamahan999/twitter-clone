import React, { useEffect, useState } from 'react';

import styles from './TweetInput.module.css';

function TweetInput(props) {

    const [content, setContent] = useState(null);

    useEffect(() => {
        { props.handleSubmit(content) }; //sends the content up to the container that holds it

        if (props.isSubmitted) { //flag from container of whether to pull the data

            { props.submissionReceived() }; // sends the container that it has received the submission request and has sent the content up
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