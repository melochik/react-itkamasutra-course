import head from "./Header.module.css"
import React from "react"
const Header = () => {
    return (
        <header className={head.header}>
            <img className={head.logo} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"></img>
        </header>
    )
}
export default Header
