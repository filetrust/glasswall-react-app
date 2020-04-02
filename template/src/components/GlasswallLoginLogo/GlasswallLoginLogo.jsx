import React from "react";
import styles from "./GlasswallLoginLogo.module.scss";

const GlasswallLoginLogo = () => {
    return (
        <div className={styles.logo} data-testid="logoDiv"></div>
    );
};

export default GlasswallLoginLogo;