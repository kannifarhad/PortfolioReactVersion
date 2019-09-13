import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {getConfigs, getLangList, getMenus, getTranslations} from './Redux/actions';

store.dispatch(getConfigs()).then(response=> {
    store.dispatch(getTranslations(response.data.lang));
    store.dispatch(getMenus(response.data.lang));
    return store.dispatch(getLangList()).then(response => {
        return true;
    });
    
}).then(result => {
    ReactDOM.render(
        <Provider store={store} >
            <App  /> 
        </Provider>
        , document.getElementById("root"));
});


//ReactDOM.render( <App store={store} /> , document.getElementById("root"));
// import $ from 'jquery';
// import styles from './Assets/css/style.css';
