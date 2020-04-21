import React from "react";
import PropTypes from "prop-types";

import GlasswallLogo from "../../GlasswallLogo/GlasswallLogo";

import {Nav} from "../Nav/Nav";

import styles from "./NavBar.module.scss";

export interface NavBarProps { logo: boolean, expanded: boolean, children: Array<Nav> }

const NavBar = (props: NavBarProps) => {

    return (
        <div className={`${styles.navBar} ${props.expanded ? styles.expanded : ""}`}>
            {props.logo &&
                <GlasswallLogo className={styles.logo} />
            }

            {props.children}

        </div>
    );
};

NavBar.propTypes = {
    logo: PropTypes.bool
};

export { NavBar };