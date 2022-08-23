import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
const MyPosts = (props) => {


    let postsMap = props.postsData.map(el => <Post likeCount={el.likeCount} message={el.message} img={el.img} />)
    let text = React.createRef()

    return (
        <div className={myPosts.myposts}>
            <div className={myPosts.anotation}>
                <h1 className={myPosts.sent}>My fav. posts</h1>
                <textarea name="" id="" cols="30" rows="10" ref={text}></textarea>
                <button onClick={() => props.addPost(text.current.value)}>Add Post</button>
            </div>
            {postsMap}
        </div>
    )
}
export default MyPosts
