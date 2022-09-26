import React from "react";
import d from "./Users.module.css"
import * as axios from "axios"



export let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items))
    }


    let users = props.users.map(u => <div key={u.id} className={d.hey}>
        <span className={d.userImgBtn}>
            <div><img src="https://images.genius.com/fc08c1044e257dc664ca6ffbd0393476.1000x1000x1.jpg" width="100" /></div>
            <div>{u.followed ?
                <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> :
                <button onClick={() => { props.follow(u.id) }}>Follow</button>}</div>
        </span>

        <span className={d.userInfo}>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span className={d.location}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
    </div>)
    return (
        <div>
            {users}
        </div>
    )
} 