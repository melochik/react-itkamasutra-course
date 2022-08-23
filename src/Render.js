import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";



export const Morerender = (state, addPost, addDialog) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state} addPost={addPost} addDialog={addDialog} />
            </BrowserRouter>
        </React.StrictMode>
    );
}