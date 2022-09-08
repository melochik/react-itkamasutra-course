import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
import { addPost, updateTextArea } from "../../../redux/state"


const MyPosts = (props) => {


    let postsMap = props.postsData.map(el => <Post likeCount={el.likeCount} message={el.message} img={el.img} />)
    let text = React.createRef()

    const func = () => {
        props.dispatch(updateTextArea(text.current.value))
    }

    return (
        <div className={myPosts.myposts}>
            <div className={myPosts.anotation}>
                <h1 className={myPosts.sent}>My fav. posts</h1>
                <textarea onChange={func} value={props.text} cols="30" rows="10" ref={text}></textarea>
                <button onClick={() => {
                    props.dispatch(addPost())
                    props.dispatch(updateTextArea(""))
                }}>Add Post</button>
            </div>
            {postsMap}
        </div>
    )
}
export default MyPosts
