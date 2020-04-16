import React from "react";

import styles from "./Nav.module.scss";

export interface NavProps { expanded: boolean, children?: React.ReactNode}

const Nav = (props: NavProps) => {
    return (
        <nav className={`${styles.nav} ${props.expanded ? styles.menuExpanded : ""}`}>
            {props.children}
        </nav>
    );
};

export { Nav };