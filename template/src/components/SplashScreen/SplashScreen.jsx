import React from "react";

import GlasswallLogo from "../GlasswallLogo/GlasswallLogo";

import styles from "./SplashScreen.module.scss";

const SplashScreen = ({ heading, subHeading, children }) => {
    return (
        <div className={styles.splashContainer} data-testid="splashContainerDiv">
            <div className={styles.logoContainer} data-testid="logoContainerDiv">
                <GlasswallLogo />
            </div>
            
            <div className={styles.headingContainer} data-testid="headingContainerDiv">
                <h1 className={styles.heading}>{heading}</h1>
                <h2 className={styles.subHeading}>{subHeading}</h2>
                <div className={styles.childContainer}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
