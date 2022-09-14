import React from "react"
import MyInfo from "./MyInfo/MyInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Content = (props) => {

    return (
        <div>
            <MyInfo />
            <MyPostsContainer />
        </div>
    )
}
export default Content
