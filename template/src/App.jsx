import React from "react";

import SplashScreen from "./components/SplashScreen/SplashScreen";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <SplashScreen heading="Glasswall React App" subHeading="Edit src/App.jsx and save to reload.">
                <a className={styles.button} href="https://github.com/filetrust/glasswall-react-app" target="_blank" rel="noopener noreferrer">Github</a>
                <a className={styles.button} href="https://filetrust.github.io/frontend/" target="_blank" rel="noopener noreferrer">Style Guide</a>
            </SplashScreen>
        </div>
    );
};

export default App;
