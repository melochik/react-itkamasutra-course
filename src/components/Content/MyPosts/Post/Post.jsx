import React from "react"
import post from "./Post.module.css"
const Post = () => {
    return (
        <div>
            <div className={post.post}>
                <img src="https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" />
                post 1
            </div>
            <div className={post.emote}>like</div>
        </div>
    )
}
export default Post
