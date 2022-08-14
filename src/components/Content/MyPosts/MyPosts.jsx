import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
const MyPosts = () => {
    return (
        <div className={myPosts.myposts}>
            <h1 className={myPosts.sent}>My fav. posts</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts
