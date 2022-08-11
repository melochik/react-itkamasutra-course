import React from "react"
import cont from "./Content.module.css"
const Content = () => {
    return (
        <div className={cont.content}>
            <div className={cont.box}></div>
            <div>
                <div className={cont.item}>name</div>
                <div className={cont.item}>second name</div>
                <div className={cont.item}>job</div>
                <div>
                    <div className={cont.post}>post 1</div>
                    <div className={cont.post}>post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Content
