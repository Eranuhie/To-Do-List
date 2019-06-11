import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
// import store from "./store/store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RootReducer from "./reducers/reducer"

var obj = combineReducers({
    rootReducer1:RootReducer
})
let store = createStore(obj)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
