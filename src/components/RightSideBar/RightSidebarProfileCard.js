import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import styles from "./RightSidebarProfileCard.module.css";
import FollowButton from "./FollowButton";

function RightSidebarProfileCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentContainer}>

          <AccountCircleIcon />
          <div className={styles.accountInformation}>
            <div className={styles.username}>{props.username}</div>
            <div className={styles.handle}>@{props.handle}</div>
          </div>
        </div>

        <div className={styles.FollowButton} >
          <FollowButton />
        </div>
        {/* <Button size="small" variant="outlined" className={styles.followButton}>Follow</Button> */}
      </div>
    </div>
  );
}

export default RightSidebarProfileCard;
