import React, { useState } from "react";

import { NavBar, Nav, NavButton, ExpandButton, NavSpacer } from "./components/GlasswallNav/GlasswallNav";
import SplashScreenView from "./views/SplashScreenView/SplashScreenView";

import styles from "./App.module.scss";

const App = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [navExpanded, setNavExpanded] = useState(true);

    return (
        <div className={styles.app}>
            <div className={styles.mainContainer}>
                {showSplashScreen &&
                    <SplashScreenView hideSplashScreen={() => setShowSplashScreen(false)} />
                }

                {!showSplashScreen &&
                    <NavBar expanded={navExpanded} logo>
                        <Nav expanded={navExpanded}> {/* TODO: Add react-router / method of switching views. */}
                            <NavButton>
                                Home
                            </NavButton>

                            <NavSpacer />

                            <NavButton>
                                About
                            </NavButton>

                            <NavButton>
                                Contact
                            </NavButton>
                        </Nav>

                        <Nav expanded={navExpanded} bottom>
                            <NavButton clickHandler={() => setShowSplashScreen(true)}>
                                Back
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
