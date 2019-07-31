import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './Redux/reducers';
import {createStore} from 'redux';

import config from './data/config';

const store = createStore(reducer, config);
console.log(store.getState());
ReactDOM.render( <App title={"Site RIRLE"} />, document.getElementById("root"));

// import $ from 'jquery';
// import styles from './Assets/css/style.css';
