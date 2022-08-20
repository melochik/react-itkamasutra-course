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
    //DATA
    let dialogsData = [
        { name: "Ivan", id: "1" },
        { name: "Vova", id: "2" },
        { name: "Egor", id: "3" },
        { name: "Zaur", id: "4" },
        { name: "Nata", id: "5" },
        { name: "Liza", id: "6" },
    ]

    let messagesData = [
        { content: "Hi" },
        { content: "How are you" },
        { content: "what about your project" },
    ]
    //Array - Components
    let dialogsMap = dialogsData.map(user => <Dialog name={user.name} id={user.id} />)
    let messagesMap = messagesData.map(el => <Message content={el.content} />)

    return (
        <div className={d.dialogs}>
            <div className={d.diaolgsList}>
                {dialogsMap}
            </div>
            <div className={d.currentDialog}>
                {messagesMap}
            </div>
        </div >
    )
}

export default Dialogs