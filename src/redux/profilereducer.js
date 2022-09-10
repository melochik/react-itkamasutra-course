let grundState = {
    postsData: [
        { id: 1, likeCount: 15, message: "you are cool", img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" },
        { id: 2, likeCount: 10000, message: "i'm gay", img: "https://pbs.twimg.com/profile_images/1366059096575598597/TnJuonYC_400x400.jpg" },
        { id: 3, likeCount: 0, message: "i hate you!", img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" },
    ],
    textArea: ""
}

export const profileReducer = (state = grundState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 4,
                likeCount: 10,
                message: state.textArea,
                img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png"
            }
            state.postsData.push(newPost)
            return state
        case "UPDATE-TEXT-AREA":
            state.textArea = action.text
            return state
        default:
            return state
    }
}
export const addPost = () => ({ type: "ADD-POST" })
export const updateTextArea = (a) => ({ type: "UPDATE-TEXT-AREA", text: a })