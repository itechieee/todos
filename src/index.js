import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import Todo from './models/todo';
import  thunk  from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, {
    todos:[
        new Todo(1, 'test')
    ]
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>   
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
