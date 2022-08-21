import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

let dialogsData = [
  { name: "Ivan", id: "1" },
  { name: "Vova", id: "2" },
  { name: "Egor", id: "3" },
  { name: "Zaur", id: "4" },
  { name: "Nata", id: "5" },
  { name: "Liza", id: "6" },
]

let messagesData = [
  { content: "Hi" },
  { content: "How are you" },
  { content: "what about your project" },
]

let postsData = [
  { likeCount: 15, message: "you are cool", img: "https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" },
  { likeCount: 10000, message: "i'm gay", img: "https://pbs.twimg.com/profile_images/1366059096575598597/TnJuonYC_400x400.jpg" },
  { likeCount: 0, message: "i hate you!", img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
