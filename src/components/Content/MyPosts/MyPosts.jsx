import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"


const MyPosts = (props) => {

    let postsMap = props.postsData.map(el => <Post likeCount={el.likeCount} message={el.message} img={el.img} />)

    return (
        <div className={myPosts.myposts}>
            <div className={myPosts.anotation}>
                <h1 className={myPosts.sent}>My fav. posts</h1>
                <textarea onChange={props.onChange} value={props.text} cols="30" rows="10" ></textarea>
                <button onClick={props.addPost}>Add Post</button>
            </div>
            {postsMap}
        </div>
    )
}
export default MyPosts
