import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {getConfigs, getLangList, getMenus, getTranslations} from './Redux/actions';

ReactDOM.render(
                <div className="preloading">
                    <div className="lds-dual-ring"><img src="/assets/img/logo_yellow.svg" /></div>
                </div>, document.getElementById("root"));


store.dispatch(getConfigs()).then(response=> {
     Promise.all([
        store.dispatch(getTranslations(response.data.lang)),
        store.dispatch(getMenus(response.data.lang)),
        store.dispatch(getLangList())
    ]).then(response => {
        ReactDOM.render(
            <Provider store={store} >
                <App  /> 
            </Provider>
            , document.getElementById("root"));
    });
});


//ReactDOM.render( <App store={store} /> , document.getElementById("root"));
// import $ from 'jquery';
// import styles from './Assets/css/style.css';
