import React from "react";
import d from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addDialog, updateStateDialogMessage } from "../../redux/state";

const Dialogs = (props) => {

    //Array - Components
    let dialogsMap = props.data.dialogsData.map(user => <Dialog name={user.name} id={user.id} />)
    let messagesMap = props.data.messagesData.map(el => <Message content={el.content} />)

    let text = React.createRef()

    const func = () => {
        props.dispatch(addDialog(text.current.value))
        props.dispatch(updateStateDialogMessage(""))
    }

    const change = () => {
        props.dispatch(updateStateDialogMessage(text.current.value))
    }

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
                    <textarea onChange={change} ref={text} value={props.data.currentMessage} cols="30" rows="2"></textarea>
                    <button onClick={func}>press to add</button>
                </div>

            </div>
        </div >
    )
}

export default Dialogs