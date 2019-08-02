import {createStore} from 'redux';
import reducer from '../reducers';

import config from '../../data/config';
import languageData from '../../data/language';
import menusList from '../../data/menu';
import categoriesList from '../../data/categories';

var allData = {
    config,
    languageData,
    menusList,
    categoriesList
}

function addPromiseThunkSupport(store) {
    const dispatch = store.dispatch;
    return action => {
        if(typeof action.then  === 'function') {
            return action.then(dispatch);
        } else if (typeof action === 'function') {
            return action(dispatch);
        }
        return dispatch(action);
    }
}

const store = createStore(reducer, allData);
store.dispatch = addPromiseThunkSupport(store);

export default store;
