import React from "react";

import GlasswallLoginLogo from "./components/GlasswallLoginLogo/GlasswallLoginLogo";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.titleContainer}>
                <GlasswallLoginLogo />
               
            </div>            
        </div>
    );
};

export default App;
