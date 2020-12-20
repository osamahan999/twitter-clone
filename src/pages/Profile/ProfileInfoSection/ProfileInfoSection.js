import React, { useState } from 'react';

import styles from './ProfileInfoSection.module.css';
import Modal from "@material-ui/core/Modal";
import LocationIcon from '../../../components/TwitterFeed/Tweets/TweetContainer/TweetContentContainer/TweetButtonContainer/TweetIcons/LocationIcon';
import DateOfBirthIcon from '../../../components/TwitterFeed/Tweets/TweetContainer/TweetContentContainer/TweetButtonContainer/TweetIcons/DateOfBirthIcon';
import JoinDateIcon from '../../../components/TwitterFeed/Tweets/TweetContainer/TweetContentContainer/TweetButtonContainer/TweetIcons/JoinDateIcon';
import ThreeDotsIcon from '../../../components/TwitterFeed/TweetInputSection/TweetInput/BottomInputSection/BottomIcons/Icons/ThreeDotsIcon/ThreeDotsIcon';
import MessagesIcon from '../../../components/LeftSideBar/Icons/MessagesIcon';
import FollowButton from '../../../components/RightSideBar/FollowButton';



function ProfileInfoSection(props) {


    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div>
            <div className={styles.CoverPhoto}>
                <img src={props.profileCoverPicUrl}></img>
            </div>

            <div className={styles.ProfileDataContainer}>

                {false ?
                    <div className={styles.EditProfile}>
                        <button onClick={() => setModalOpen(true)} className={styles.EditButton}>Edit Profile</button>

                        <Modal className={styles.EditProfileModal} open={modalOpen} onClose={() => setModalOpen(false)} >
                            <div className={styles.ModalContent} >hi</div>
                        </Modal>

                    </div>
                    :
                    <div className={styles.InteractContainer}>

                        <div className={styles.InteractWithProfile}>

                            <div >
                                {true   /*hasDropdown?*/ &&
                                    <div className={styles.CircledIcon}>
                                        <ThreeDotsIcon />
                                    </div>
                                }
                            </div>

                            <div >
                                {true /*DMs enabled ?*/ &&
                                    <div className={styles.CircledIcon}>

                                        <MessagesIcon />

                                    </div>

                                }
                            </div>

                            <div className={styles.CircledButton}>
                                {true /* Follow */ &&
                                    <FollowButton />
                                }
                            </div>
                        </div>
                    </div>


                }



                <div className={styles.ProfilePhotoNameHandleContainer} >
                    <img src={props.profilePicUrl} className={styles.ProfilePhoto}></img>
                    <div className={styles.Name}>{props.profileName}</div>
                    <div className={styles.Handle}>{props.profileHandle}</div>

                </div>


                <div className={styles.Bio}>{props.profileBio}</div>

                <div className={styles.PersonalInfo}>
                    {/* {if location public} */ true &&
                        <div className={styles.Info}>
                            <LocationIcon />
                            <div>Location </div>
                        </div>
                    }
                    {/* {if DOB public} */ true &&
                        <div className={styles.Info}>
                            <DateOfBirthIcon />
                            <div>May 14 1999</div>
                        </div>
                    }
                    {/* {if join date public} */ true &&
                        <div className={styles.Info}>
                            <JoinDateIcon />
                            <div>Joined June 2016</div>
                        </div>
                    }

                </div>

                <div className={styles.Follows}>
                    <div className={styles.FollowContainer}>
                        <div className={styles.Amt}>{props.profileFollowing}</div>
                        <div className={styles.AmtOf}>Following</div>
                    </div>
                    <div className={styles.FollowContainer}>
                        <div className={styles.Amt}>{props.profileFollowers}</div>
                        <div className={styles.AmtOf}>Followers</div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default ProfileInfoSection;
