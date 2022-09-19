import { combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogreducer";
import { profileReducer } from "./profilereducer";
import { sidebarReducer } from "./sidebarreducer";
import { usersReducer } from "./usersreducer";

let reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
})
let store = createStore(reducers)

export default store  