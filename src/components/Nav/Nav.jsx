import classes from "./Nav.module.css"
import React from "react"

const Nav = () => {
    return (
        <nav className={classes.nav}>

            <div >
                <a className={classes.item} href="/content">Profile</a>
            </div>

            <div >
                <a className={classes.item} href="/dialogs">Messages</a>
            </div>

            <div>
                <a className={classes.item} href="/news">News</a>
            </div>

            <div >
                <a className={classes.item} href="/music">Music</a>
            </div>

            <div >
                <a className={classes.item} href="/settings">Settings</a>
            </div>
        </nav>
    )
}
export default Nav