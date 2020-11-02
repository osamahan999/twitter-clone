import React from "react";

import Modal from "@material-ui/core/Modal";

import TwitterIcon from "@material-ui/icons/Twitter";

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
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={styles.container}>
			<TwitterIcon className={styles.twitterIcon} style={{ fontSize: 35 }} />
			<SidebarOption
				Icon={HomeIcon}
				text="Home"
				handlerFunction={() => console.log("Navigate to home")}
			/>
			<SidebarOption
				Icon={ExploreIcon}
				text="Explore"
				handlerFunction={() => console.log("Navigate to explore")}
			/>
			<SidebarOption
				Icon={NotificationsIcon}
				text="Notifications"
				handlerFunction={() => console.log("Navigate to notifications")}
			/>
			<SidebarOption
				Icon={MessagesIcon}
				text="Messages"
				handlerFunction={() => console.log("Navigate to messages")}
			/>
			<SidebarOption
				Icon={BookmarkIcon}
				text="Bookmarks"
				handlerFunction={() => console.log("Navigate to bookmarks")}
			/>
			<SidebarOption
				Icon={ListIcon}
				text="Lists"
				handlerFunction={() => console.log("Navigate to lists")}
			/>
			<SidebarOption
				Icon={ProfileIcon}
				text="Profile"
				handlerFunction={() => console.log("Navigate to profile")}
			/>
			<SidebarOption
				Icon={MoreIcon}
				text="More"
				handlerFunction={() => console.log("Navigate to more stuff")}
			/>
			<button className={styles.tweetButton} onClick={handleOpen}>
				Tweet
			</button>
			<Modal open={open} onClose={handleClose} className={styles.tweetModal}>
				<div className={styles.tweetModalContent}>Tweet</div>
			</Modal>
		</div>
	);
}

export default LeftSidebar;
