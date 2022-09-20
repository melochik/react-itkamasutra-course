import React from "react";
import d from "./Users.module.css"

export let Users = (props) => {
    let users = props.users.map(u => <div key={u.id} className={d.hey}>
        <span className={d.userImgBtn}>
            <div><img src={u.img} width="100" /></div>
            <div>{u.followed ?
                <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> :
                <button onClick={() => { props.follow(u.id) }}>Follow</button>}</div>
        </span>

        <span className={d.userInfo}>
            <span>
                <div>{u.name}</div>
                <div>{u.describe}</div>
            </span>
            <span className={d.location}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
    </div>)
    return (
        <div>
            {users}
        </div>
    )
} 