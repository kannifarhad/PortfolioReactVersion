import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './Redux/reducers';
import {createStore} from 'redux';

import config from './data/config';
import languageData from './data/language';
import menusList from './data/menu';
import categoriesList from './data/categories';
var allData = {
    config,
    languageData,
    menusList,
    categoriesList
}
const store = createStore(reducer, allData);
store.subscribe(()=> console.log(store.getState()));
console.log(store.getState());
ReactDOM.render( <App title={"Site RIRLE"} store={store} />, document.getElementById("root"));

// import $ from 'jquery';
// import styles from './Assets/css/style.css';
