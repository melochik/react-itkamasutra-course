import React from "react";
import styles from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.item}>
            <NavLink to={path} className={navData => navData.isActive ? styles.active : styles.item}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog