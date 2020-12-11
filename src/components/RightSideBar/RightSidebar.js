import React from "react";

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

				<p className={styles.footerText}>Show more</p>
			</div>
		</div>
	);
}

export default RightSidebar;
