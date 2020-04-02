import React, { useState } from "react";

import GlasswallLoginLogo from "./components/GlasswallLoginLogo/GlasswallLoginLogo";

import styles from "./App.module.scss";

const App = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    return (
        <div className={styles.app}>
            <div className={styles.mainContainer}>
                {showSplashScreen &&
                    <>
                        <div className={styles.splashContainer}>
                            <GlasswallLoginLogo />

                            <h1 className={styles.heading}>Glasswall-React-App</h1>
                        </div>
                    </>
                }

                {!showSplashScreen &&
                    <>
                        <Header menuExpanded={menuExpanded} />
                        <MainMenu />
                        <Main  />
                    </>
                }
            </div>
        </div>
    );
};

export default App;
