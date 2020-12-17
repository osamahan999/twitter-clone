import React from "react";

import styles from "./RegistrationPage.module.css";

function RegistrationPage(props) {
    return (

        <div className={styles.container}>

            <div className={styles.topBar}>
                <div className={styles.leftSpacer}></div>
                <div>img</div>
                <div className={styles.rightSpacer}>
                    <div>next</div>
                </div>

            </div>



            <h1>Create your acc!</h1>

            <div>name</div>
            <div>phone</div>
            <div>click here to switch from phone div to email div and viceversa</div>





            <div>Date of birth</div>
            <div className={styles.DOBcontainer}>
                <div>Month</div>
                <div>Day</div>
                <div>Year</div>

            </div>

            {/* //top bar with tweet symbol and next button

                    //middle section with textboxes and create ur acc
                    //date of birth section */}



        </div>



    );
}

export default RegistrationPage;
