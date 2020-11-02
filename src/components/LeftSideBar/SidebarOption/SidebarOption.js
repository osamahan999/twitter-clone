import React, { useState } from "react";

import styles from "./SidebarOption.module.css";

function SidebarOption({ Icon, text, handlerFunction }) {
	return (
		<div className={styles.container} onClick={handlerFunction}>
			<Icon className={styles.icon} />
			<h3>{text}</h3>
		</div>
	);
}

export default SidebarOption;
