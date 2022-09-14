import React from "react";
import { connect } from "react-redux";

import { addDialog, updateStateDialogMessage } from "../../redux/dialogreducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        text: state.dialogs.currentMessage,
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        change: (e) => dispatch(updateStateDialogMessage(e.target.value)),
        func: () => {
            dispatch(addDialog())
            dispatch(updateStateDialogMessage(""))
        }

    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer