export const dialogReducer = (state, action) => {
    if (action.type === "ADD-DIALOG") {
        let newMessage = {
            content: action.content
        }
        state.messagesData.push(newMessage)

    }
    else if (action.type === "UPDATE-DIALOG-AREA") {
        state.currentMessage = action.message

    }
    return state
}
export const addDialog = (a) => ({ type: "ADD-DIALOG", content: a })
export const updateStateDialogMessage = (b) => ({ type: "UPDATE-DIALOG-AREA", message: b })