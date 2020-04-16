import React, { useState } from "react";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import { NavBar, Nav, NavButton, ExpandButton } from "./components/GlasswallNav/GlasswallNav";

import styles from "./App.module.scss";

const App = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(false);
    const [navExpanded, setNavExpanded] = useState(true);

    return (
        <div className={styles.app}>
            <div className={styles.mainContainer}>
                {showSplashScreen &&
                    <SplashScreen heading="Glasswall React App" subHeading="Edit src/App.jsx and save to reload.">
                        <div>
                            <p className={styles.link} onClick={() => setShowSplashScreen(false)}>Click here to hide the Splash Screen.</p>
                        </div>

                        <div>
                            <a className={styles.button} href="https://filetrust.github.io/frontend/" target="_blank" rel="noopener noreferrer">Styleguide</a>
                        </div>

                        <div>
                            <a className={styles.button} href="https://github.com/filetrust/glasswall-react-app" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </SplashScreen>
                }

                {!showSplashScreen &&
                    <NavBar expanded={navExpanded} logo>
                        <Nav expanded={navExpanded}>
                            <NavButton buttonType="button5">
                                Home
                            </NavButton>

                        </Nav>
                        
                        <ExpandButton expanded={navExpanded} clickHandler={() => setNavExpanded(!navExpanded)} />
                    </NavBar>
                }
            </div>
        </div>
    );
};

export default App;
