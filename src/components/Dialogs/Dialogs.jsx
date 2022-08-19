import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css"

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.item}>
            <NavLink to={path} className={navData => navData.isActive ? d.active : d.item}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={d.message}>{props.content}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.diaolgsList}>
                <Dialog name="Ivan" id="1" />
                <Dialog name="Vova" id="2" />
                <Dialog name="Egor" id="3" />
                <Dialog name="Zaur" id="4" />
                <Dialog name="Nata" id="5" />
                <Dialog name="Liza" id="6" />
            </div>
            <div className={d.currentDialog}>
                <Message content="hi" />
                <Message content="How are you" />
                <Message content="what about your project" />
            </div>
        </div >
    )
}

export default Dialogs