import React from "react"
import MyPosts from "./MyPosts"
import { addPost, updateTextArea } from "../../../redux/profilereducer"

import { connect } from "react-redux"




let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            let a = updateTextArea(e.target.value)
            dispatch(a)
        },
        addPost: () => {
            dispatch(addPost())
            let a = updateTextArea("")
            dispatch(a)
        }

    }
}

let mapStateToProps = (state) => {
    return {
        text: state.profile.textArea,
        postsData: state.profile.postsData
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
