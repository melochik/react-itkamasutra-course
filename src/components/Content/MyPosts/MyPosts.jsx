import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
const MyPosts = () => {
    return (
        <div className={myPosts.myposts}>
            <h1 className={myPosts.sent}>My fav. posts</h1>
            <Post likeCount="15" message="you are cool" img="https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" />
            <Post likeCount="0" message="i hate you!" img="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
        </div>
    )
}
export default MyPosts
