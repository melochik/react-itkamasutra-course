import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import state, { mainRender, addDialog, addPost, updateTextArea } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export const Morerender = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state} addPost={addPost} addDialog={addDialog} updateTextArea={updateTextArea} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

Morerender()

mainRender(Morerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
