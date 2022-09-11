import React from "react";
import { addDialog, updateStateDialogMessage } from "../../redux/dialogreducer";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
    const func = () => {
        props.store.dispatch(addDialog())
        props.store.dispatch(updateStateDialogMessage(""))
    }

    const change = (e) => {
        props.store.dispatch(updateStateDialogMessage(e.target.value))
    }

    return (
        <Dialogs
            change={change}
            func={func}
            text={props.store.getState().dialogs.currentMessage}
            dialogsData={props.store.getState().dialogs.dialogsData}
            messagesData={props.store.getState().dialogs.messagesData} />
    )
}

export default DialogsContainer