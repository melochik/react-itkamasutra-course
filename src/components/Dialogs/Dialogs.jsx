import React from "react";
import d from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    //DATA

    //Array - Components
    let dialogsMap = props.dialogsData.map(user => <Dialog name={user.name} id={user.id} />)
    let messagesMap = props.messagesData.map(el => <Message content={el.content} />)

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