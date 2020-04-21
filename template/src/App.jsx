import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
                    <Router>
                        <NavBar expanded={navExpanded} logo>
                            <p>test</p>

                            <Nav expanded={navExpanded}>
                                <Link to="/">
                                    <NavButton>
                                        Home
                                    </NavButton>
                                </Link>

                                <NavSpacer />

                                <Link to="/about">
                                    <NavButton>
                                        About
                                    </NavButton>
                                </Link>

                                <Link to="/contact">
                                    <NavButton>
                                        Contact
                                    </NavButton>
                                </Link>
                            </Nav>

                            <Nav expanded={navExpanded} bottom>
                                <NavButton clickHandler={() => setShowSplashScreen(true)}>
                                    Back
                                </NavButton>
                            </Nav>

                            <ExpandButton expanded={navExpanded} clickHandler={() => setNavExpanded(!navExpanded)} />
                        </NavBar>

                        <div className={`${styles.main} ${navExpanded ? styles.expanded : ""}`}>
                            <div className={styles.content}>
                                <Switch>
                                    <Route exact path="/">
                                        <div>Home</div>
                                    </Route>

                                    <Route path="/about">
                                        <div>About</div>
                                    </Route>

                                    <Route path="/contact">
                                        <div>Contact</div>
                                    </Route>

                                </Switch>
                            </div>
                        </div>
                    </Router>
                }
            </div>
        </div>
    );
};

export default App;
