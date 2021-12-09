import App, {AppPropsType} from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export const renderTree = (state:AppPropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App profilePage={state.profilePage} dialogsPage={state.dialogsPage} sidebar={state.sidebar}/>
            </BrowserRouter>
        </React.StrictMode>
        , document.getElementById('root')
    );
}