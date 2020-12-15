import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import styles from "./RightSidebarProfileCard.module.css";

function RightSidebarProfileCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AccountCircleIcon />
        <div className={styles.accountInformation}>
          <div className={styles.username}>{props.username}</div>
          <div className={styles.handle}>@{props.handle}</div>
        </div>
        <button className={styles.followButton}>Follow</button>
        {/* <Button size="small" variant="outlined" className={styles.followButton}>Follow</Button> */}
      </div>
    </div>
  );
}

export default RightSidebarProfileCard;
