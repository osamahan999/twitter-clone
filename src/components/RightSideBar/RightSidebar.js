import React from "react";

import SidebarCard from "./RightSidebarCard";
import SidebarProfileCard from "./RightSidebarProfileCard";

import SearchIcon from "@material-ui/icons/Search";

import styles from "./RightSidebar.module.css";

function RightSidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Twitter"
          className={styles.searchText}
        />
      </div>
      <div className={styles.blueRoundedCard}>
        <p className={styles.headerText}>What’s happening</p>

        <div>
          <SidebarCard
            topic="COVID 19"
            time="December 11th, 2020"
            text="Wear a mask. We found out its a good idea"
          />
          <SidebarCard
            topic="COVID 19"
            time="December 11th, 2020"
            text="Get the vaccine!"
            footerText="Trending with Pfizer"
          />
        </div>

        <div className={styles.bottomDivider}></div>
        <p className={styles.footerText}>Show more</p>
      </div>

      <div className={styles.blueRoundedCard}>
        <p className={styles.headerText}>Who to follow</p>

        <div>
          <SidebarProfileCard
            username="Sam Louderback"
            handle="samlouderback10"
          />
          <SidebarProfileCard username="Osama Hanhan" handle="graciouspiano" />
          <SidebarProfileCard username="Big Daddy" handle="big_daddy" />

          <div className={styles.bottomDivider}></div>
          <p className={styles.footerText}>Show more</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
