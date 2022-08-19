import head from "./Header.module.css"
import React from "react"
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <header className={head.header}>
            <NavLink to="/"><img className={head.logo} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" /></NavLink>
        </header>
    )
}
export default Header
