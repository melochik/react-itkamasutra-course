import React from "react"

import MyPosts from "./MyPosts"
import { addPost, updateTextArea } from "../../../redux/profilereducer"


const MyPostsContainer = (props) => {

    const onAddPost = () => {
        props.store.dispatch(addPost())
        let a = updateTextArea("")
        props.store.dispatch(a)
    }

    const onChange = (e) => {
        let a = updateTextArea(e.target.value)
        props.store.dispatch(a)
    }

    return (<MyPosts
        text={props.store.getState().profile.textArea}
        postsData={props.store.getState().profile.postsData}
        onChange={onChange}
        addPost={onAddPost} />)
}
export default MyPostsContainer
