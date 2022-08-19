import React from "react"
import cont from "./MyInfo.module.css"
const MyInfo = () => {
    return (
        <div>
            <div className={cont.box}></div>
            <div className={cont.item}>name - Ivan</div>
            <div className={cont.item}>second name - Kuchyn</div>
            <div className={cont.item}>job - Student</div>
        </div>
    )
}
export default MyInfo
