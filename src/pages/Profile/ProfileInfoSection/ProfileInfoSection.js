import React, { useState } from 'react';

import styles from './ProfileInfoSection.module.css';
import Modal from "@material-ui/core/Modal";



function ProfileInfoSection(props) {


    const [modalOpen, setModalOpen] = useState(false);

    const profilePicUrl = props.profilePicUrl;

    return (
        <div>
            <div className={styles.CoverPhoto}>
                <img src={props.profileCoverPicUrl}></img>
            </div>

            <div className={styles.ProfileBio}>
                <div className={styles.EditProfile}>
                    <button onClick={() => setModalOpen(true)} className={styles.EditButton}>Edit Profile</button>

                    <Modal className={styles.EditProfileModal} open={modalOpen} onClose={() => setModalOpen(false)} >
                        <div className={styles.ModalContent} >hi</div>
                    </Modal>

                </div>

                <div className={styles.ProfileName} >
                    <img src={profilePicUrl} className={styles.ProfilePhoto}></img>
                    <div className={styles.Name}>{props.profileName}</div>
                    <div className={styles.Handle}>{props.profileHandle}</div>

                </div>


                <div className={styles.Bio}>{props.profileBio}</div>

                <div className={styles.PersonalInfo}>
                    {/* {if location public} */ true && <div className={styles.Info}> location </div>}
                    {/* {if DOB public} */ true && <div className={styles.Info}> May 14 1999 </div>}
                    {/* {if join date public} */ true && <div className={styles.Info}> Joined June 2016 </div>}

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
