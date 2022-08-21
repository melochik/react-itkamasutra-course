import React from "react";
import styles from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={styles.message}>{props.content}</div>
    )
}
export default Message