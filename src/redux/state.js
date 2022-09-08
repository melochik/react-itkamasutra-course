export const addDialog = (a) => ({ type: "ADD-DIALOG", content: a })
export const updateStateDialogMessage = (b) => ({ type: "UPDATE-DIALOG-AREA", message: b })
export const addPost = () => ({ type: "ADD-POST" })
export const updateTextArea = (a) => ({ type: "UPDATE-TEXT-AREA", text: a })


let store = {
    _state: {
        dialogs: {
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
        },
        profile: {
            postsData: [
                { id: 1, likeCount: 15, message: "you are cool", img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" },
                { id: 2, likeCount: 10000, message: "i'm gay", img: "https://pbs.twimg.com/profile_images/1366059096575598597/TnJuonYC_400x400.jpg" },
                { id: 3, likeCount: 0, message: "i hate you!", img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" },
            ],
            textArea: ""
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                likeCount: 10,
                message: this._state.profile.textArea,
                img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png"
            }
            this._state.profile.postsData.push(newPost)
            this.Morerender()
        }
        else if (action.type === "ADD-DIALOG") {
            let newMessage = {
                content: action.content
            }
            this._state.dialogs.messagesData.push(newMessage)
            this.Morerender()
        }
        else if (action.type === "UPDATE-TEXT-AREA") {
            this._state.profile.textArea = action.text
            this.Morerender()
        } else if (action.type === "UPDATE-DIALOG-AREA") {
            this._state.dialogs.currentMessage = action.message
            this.Morerender()
        } else {
            alert("wechsele dispatch.type, bitte")
        }
    },
    mainRender(func) {
        this.Morerender = func
    },
    Morerender() { }
}










export default store;