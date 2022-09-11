import React from "react"
import MyInfo from "./MyInfo/MyInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Content = (props) => {

    return (
        <div>
            <MyInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Content
