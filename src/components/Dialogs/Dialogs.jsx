import React from "react";
import d from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    //Array - Components
    let dialogsMap = props.dialogsData.map(user => <Dialog name={user.name} id={user.id} />)
    let messagesMap = props.messagesData.map(el => <Message content={el.content} />)


    return (
        <div className={d.dialogs}>
            <div className={d.diaolgsList}>
                {dialogsMap}
            </div>
            <div className={d.currentDialog}>

                <div className={d.messages}>
                    {messagesMap}
                </div>
                <div className={d.addPost}>
                    <textarea onChange={props.change} value={props.text} cols="30" rows="2"></textarea>
                    <button onClick={props.func}>press to add</button>
                </div>

            </div>
        </div >
    )
}

export default Dialogs