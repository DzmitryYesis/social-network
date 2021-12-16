import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {state, subscribe} from './redux/state';
import App, {AppPropsType} from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

 let renderTree = (state:AppPropsType) => {
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

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
