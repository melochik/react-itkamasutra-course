import { dialogReducer } from "./dialogreducer"
import { profileReducer } from "./profilereducer"
import { sidebarReducer, sidebarREDUCER } from "./sidebarreducer"

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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.Morerender()
    },
    mainRender(func) {
        this.Morerender = func
    },
    Morerender() { }
}










export default store;