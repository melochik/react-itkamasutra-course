import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
const MyPosts = (props) => {


    let postsMap = props.postsData.map(el => <Post likeCount={el.likeCount} message={el.message} img={el.img} />)
    let text = React.createRef()

    const func = () => {
        let newText = text.current.value
        props.dispatch({ type: "UPDATE-TEXT-AREA", text: newText })
    }
    return (
        <div className={myPosts.myposts}>
            <div className={myPosts.anotation}>
                <h1 className={myPosts.sent}>My fav. posts</h1>
                <textarea onChange={func} value={props.text} cols="30" rows="10" ref={text}></textarea>
                <button onClick={() => {
                    props.dispatch({ type: "ADD-POST" })
                    props.dispatch({ type: "UPDATE-TEXT-AREA", text: "" })
                }}>Add Post</button>
            </div>
            {postsMap}
        </div>
    )
}
export default MyPosts
