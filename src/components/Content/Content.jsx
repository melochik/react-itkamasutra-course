import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import cont from "./Content.module.css"
const Content = () => {
    return (
        <div className={cont.content}>
            <div className={cont.box}></div>
            <div>
                <div className={cont.item}>name</div>
                <div className={cont.item}>second name</div>
                <div className={cont.item}>job</div>
                <MyPosts />
            </div>
        </div>
    )
}
export default Content
