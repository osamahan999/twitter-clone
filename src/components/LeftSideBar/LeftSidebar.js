import React from "react";

import Modal from "@material-ui/core/Modal";

import TwitterIcon from "@material-ui/icons/Twitter";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SvgIcon from "@material-ui/core/SvgIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";

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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "#15202b",
    boxShadow:
      "rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px",
    borderRadius: 16,
    border: 0,
    color: "white",
    width: 300,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "rgb(25, 39, 52)",
    },
  },
}))(MenuItem);

function LeftSidebar() {
  const [tweetBoxOpen, setTweetBoxOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTweetBoxOpen = () => {
    setTweetBoxOpen(true);
  };

  const handleTweetBoxClose = () => {
    setTweetBoxOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <button className={styles.tweetButton} onClick={handleTweetBoxOpen}>
        Tweet
      </button>

      <div
        className={styles.bottomProfileManagement}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event) => {
          handleMenuOpen(event);
          console.log("hey");
        }}
      >
        <AccountCircleIcon fontSize="large" style={{ color: "#1da1f2" }} />
        <div className={styles.nameAndHandle}>
          <div>Sam Louderback</div>
          <div>@samlouderback10</div>
        </div>
        <SvgIcon className={styles.threeDots}>
          <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z"></path>
        </SvgIcon>
      </div>
      <Modal
        open={tweetBoxOpen}
        onClose={handleTweetBoxClose}
        className={styles.tweetModal}
      >
        <div className={styles.tweetModalContent}>Tweet</div>
      </Modal>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        TransitionComponent={Fade}
        onClose={handleMenuClose}
        className={styles.menu}
      >
        <StyledMenuItem
          onClick={handleMenuClose}
          style={{ borderBottom: "1px solid rgb(56, 68, 77)" }}
        >
          <div className={styles.accountMenu}>
            <AccountCircleIcon fontSize="large" style={{ color: "#1da1f2" }} />
            <div>
              <div>Sam Louderback</div>
              <div>@samlouderback10</div>
            </div>
          </div>
        </StyledMenuItem>
        <StyledMenuItem
          onClick={handleMenuClose}
          style={{ borderBottom: "1px solid rgb(56, 68, 77)" }}
        >
          Add an existing account
        </StyledMenuItem>
        <StyledMenuItem
          onClick={handleMenuClose}
          style={{ borderTop: "1px solid rgb(56, 68, 77)" }}
        >
          Log out @samlouderback10
        </StyledMenuItem>
        {/* <SvgIcon className={styles.bottomArrow}>
          <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
        </SvgIcon> */}
      </StyledMenu>
    </div>
  );
}

export default LeftSidebar;
