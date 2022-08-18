import React from "react"
import post from "./Post.module.css"
const Post = (props) => {
    return (
        <div>
            <div className={post.post}>
                <img src={props.img} />
                {props.message}
            </div>
            <div className={post.emote}>like - {props.likeCount} </div>
        </div>
    )
}
export default Post
