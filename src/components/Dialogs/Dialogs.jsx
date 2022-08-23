import React from "react";
import d from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    //DATA

    //Array - Components
    let dialogsMap = props.data.dialogsData.map(user => <Dialog name={user.name} id={user.id} />)
    let messagesMap = props.data.messagesData.map(el => <Message content={el.content} />)

    let text = React.createRef()
    const func = () => {
        props.addDialog(text.current.value)
    }
    return (
        <div className={d.dialogs}>
            <div className={d.diaolgsList}>
                {dialogsMap}
            </div>
            <div className={d.currentDialog}>
                {messagesMap}

                <div className={d.addPost}>
                    <textarea ref={text} cols="30" rows="2"></textarea>
                    <button onClick={func}>press to add</button>
                </div>

            </div>
        </div >
    )
}

export default Dialogs