import React from "react";

import Button from "@material-ui/core/Button";
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
        <Button size="small" variant="outlined" className={styles.followButton}>Follow</Button>
      </div>
    </div>
  );
}

export default RightSidebarProfileCard;
