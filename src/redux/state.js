let Morerender = () => {

}
let state = {
    dialogs: {
        dialogsData: [
            { name: "Ivan", id: "1" },
            { name: "Vova", id: "2" },
            { name: "Egor", id: "3" },
            { name: "Zaur", id: "4" },
            { name: "Nata", id: "5" },
            { name: "Liza", id: "6" },
        ],

        messagesData: [
            { content: "Hi" },
            { content: "How are you" },
            { content: "what about your project" },
        ]

    },
    profile: {
        postsData: [
            { id: 1, likeCount: 15, message: "you are cool", img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" },
            { id: 2, likeCount: 10000, message: "i'm gay", img: "https://pbs.twimg.com/profile_images/1366059096575598597/TnJuonYC_400x400.jpg" },
            { id: 3, likeCount: 0, message: "i hate you!", img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" },
        ],
        textArea: "hello"
    }
}
export const addPost = () => {
    let newPost = {
        id: 4,
        likeCount: 10,
        message: state.profile.textArea,
        img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png"
    }
    state.profile.postsData.push(newPost)

    Morerender(state, addPost, addDialog, updateTextArea)
}

export const addDialog = (content) => {
    let newMessage = {
        content: content
    }
    state.dialogs.messagesData.push(newMessage)

    Morerender(state, addPost, addDialog, updateTextArea)
}

export const updateTextArea = (text) => {
    state.profile.textArea = text
    Morerender(state, addPost, addDialog, updateTextArea)
}

export const mainRender = (func) => {
    Morerender = func
}

export default state;