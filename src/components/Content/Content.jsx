import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import cont from "./Content.module.css"
const Content = () => {
    return (
        <div className={cont.content}>
            <div className={cont.box}></div>
            <div>
                <div className={cont.item}>name - Ivan</div>
                <div className={cont.item}>second name - Kuchyn</div>
                <div className={cont.item}>job - Student</div>
                <MyPosts />
            </div>
        </div>
    )
}
export default Content
