import React from "react"
import Post from "./Post/Post"
import myPosts from "./MyPosts.module.css"
const MyPosts = () => {

    let postsData = [
        { likeCount: 15, message: "you are cool", img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" },
        { likeCount: 10000, message: "i'm gay", img: "https://pbs.twimg.com/profile_images/1366059096575598597/TnJuonYC_400x400.jpg" },
        { likeCount: 0, message: "i hate you!", img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" },
    ]

    let postsMap = postsData.map(el => <Post likeCount={el.likeCount} message={el.message} img={el.img} />)

    return (
        <div className={myPosts.myposts}>
            <div className={myPosts.anotation}>
                <h1 className={myPosts.sent}>My fav. posts</h1>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>ADD POST</button>
            </div>
            {postsMap}
        </div>
    )
}
export default MyPosts
