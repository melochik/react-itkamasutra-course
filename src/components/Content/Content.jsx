import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import MyInfo from "./MyInfo/MyInfo"
const Content = (props) => {
    return (
        <div>
            <MyInfo />
            <MyPosts text={props.data.textArea} postsData={props.data.postsData} addPost={props.addPost} updateTextArea={props.updateTextArea} />
        </div>
    )
}
export default Content
