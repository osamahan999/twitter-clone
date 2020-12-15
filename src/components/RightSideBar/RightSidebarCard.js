import React from "react";

import styles from "./RightSidebarCard.module.css";

function RightSidebarCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topicAndTime}>
          {props.topic} {"· " + props.time}
        </div>
        <div className={styles.mainText}>{props.text}</div>
        <div className={styles.footerText}>
          {props.footerText && props.footerText}
        </div>
      </div>
    </div>
  );
}

export default RightSidebarCard;
