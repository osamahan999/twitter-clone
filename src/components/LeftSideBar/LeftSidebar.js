import React from "react";

import TwitterIcon from '@material-ui/icons/Twitter';

import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "./Icons/HomeIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import NotificationsIcon from "./Icons/NotificationsIcon";
import MessagesIcon from "./Icons/MessagesIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import ListIcon from "./Icons/ListIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import MoreIcon from "./Icons/MoreIcon";

import styles from "./LeftSidebar.module.css";

function LeftSidebar() {
	return (
		<div className={styles.container}>
			<TwitterIcon className={styles.twitterIcon} style={{ fontSize: 35 }}/>
			<SidebarOption Icon={HomeIcon} text="Home" />
			<SidebarOption Icon={ExploreIcon} text="Explore" />
			<SidebarOption Icon={NotificationsIcon} text="Notifications" />
			<SidebarOption Icon={MessagesIcon} text="Messages" />
			<SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
			<SidebarOption Icon={ListIcon} text="Lists" />
			<SidebarOption Icon={ProfileIcon} text="Profile" />
			<SidebarOption Icon={MoreIcon} text="More" />
			<button className={styles.tweetButton}>Tweet</button>
		</div>
	);
}

export default LeftSidebar;
