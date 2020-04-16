import React from "react";
import styles from "./NavButton.module.scss";

export interface NavButtonProps { buttonType: string, expanded: boolean, selected: boolean, children?: React.ReactNode }

function NavButton(props: NavButtonProps) {
    return (
        <button className={`${styles[props.buttonType]} ${props.expanded ? styles.expanded : ""} ${props.selected ? styles.selected : ""}`}>{props.children}</button>
    );
}

export { NavButton };