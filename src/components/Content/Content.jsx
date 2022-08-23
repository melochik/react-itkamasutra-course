import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import MyInfo from "./MyInfo/MyInfo"
const Content = (props) => {
    return (
        <div>
            <MyInfo />
            <MyPosts postsData={props.data.postsData} addPost={props.addPost} />
        </div>
    )
}
export default Content
