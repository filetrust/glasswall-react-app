import React from "react";

import GlasswallLoginLogo from "./components/GlasswallLoginLogo/GlasswallLoginLogo";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.titleContainer}>
                <GlasswallLoginLogo />
            
                <h1 className={styles.heading}>Glasswall-React-App</h1>
            </div>            
        </div>
    );
};

export default App;
