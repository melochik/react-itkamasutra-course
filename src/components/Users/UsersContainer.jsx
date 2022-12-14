import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsers } from "../../redux/usersreducer";
import { Users } from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow(id) { dispatch(follow(id)) },
        unfollow(id) { dispatch(unFollow(id)) },
        setUsers(users) { dispatch(setUsers(users)) }
    }
}
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)