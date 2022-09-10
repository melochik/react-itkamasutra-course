import { combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogreducer";
import { profileReducer } from "./profilereducer";
import { sidebarReducer } from "./sidebarreducer";

let reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
})
let store = createStore(reducers)

export default store  