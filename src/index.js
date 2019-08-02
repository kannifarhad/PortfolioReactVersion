import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

store.subscribe(()=> console.log(store.getState()));
ReactDOM.render( <App store={store} /> , document.getElementById("root"));

// import $ from 'jquery';
// import styles from './Assets/css/style.css';
