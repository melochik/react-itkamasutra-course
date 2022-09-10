export const profileReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 4,
            likeCount: 10,
            message: state.textArea,
            img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png"
        }
        state.postsData.push(newPost)

    }
    else if (action.type === "UPDATE-TEXT-AREA") {
        state.textArea = action.text
    }
    return state
}
export const addPost = () => ({ type: "ADD-POST" })
export const updateTextArea = (a) => ({ type: "UPDATE-TEXT-AREA", text: a })