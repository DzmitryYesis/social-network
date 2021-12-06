import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import reportWebVitals from './reportWebVitals';
import { state} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const renderTree = (state:AppPropsType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App profilePage={state.profilePage} dialogsPage={state.dialogsPage} sidebar={state.sidebar}/>
            </BrowserRouter>
        </React.StrictMode>
        , document.getElementById('root')
    );
}
renderTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
