let grundState = {
    dialogsData: [
        { name: "Ivan", id: "1" },
        { name: "Vova", id: "2" },
        { name: "Egor", id: "3" },
        { name: "Zaur", id: "4" },
        { name: "Nata", id: "5" },
        { name: "Liza", id: "6" },
    ],

    messagesData: [
        { content: "Hi" },
        { content: "How are you" },
        { content: "what about your project" },
    ],

    currentMessage: "hello it is state",
}

export const dialogReducer = (state = grundState, action) => {
    switch (action.type) {
        case "ADD-DIALOG": {
            let newMessage = {
                content: state.currentMessage
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
        }
        case "UPDATE-DIALOG-AREA":
            return {
                ...state,
                currentMessage: action.message
            }
        default:
            return state
    }
}
export const addDialog = (a) => ({ type: "ADD-DIALOG", content: a })
export const updateStateDialogMessage = (b) => ({ type: "UPDATE-DIALOG-AREA", message: b })