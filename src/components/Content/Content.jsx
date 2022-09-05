import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import MyInfo from "./MyInfo/MyInfo"
const Content = (props) => {
    return (
        <div>
            <MyInfo />
            <MyPosts text={props.data.textArea} postsData={props.data.postsData} dispatch={props.dispatch} />
        </div>
    )
}
export default Content
