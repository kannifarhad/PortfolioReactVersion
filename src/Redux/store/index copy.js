import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import apiMiddleware from '../middleware/api';

import { combineReducers } from 'redux';
import siteReducers from '../reducers/sitereducers';
import commonReducers from '../reducers/common';
import postsReducers from '../reducers/posts';


import config from '../../data/config';
import languageData from '../../data/language';
import menusList from '../../data/menu';
import categoriesList from '../../data/categories';
import categoriesTree from '../../data/categoriesTree';
import portfolio from '../../data/portfolio';

// var allData = {
//     config,
//     languageData,
//     menusList,
//     categoriesList,
//     categoriesTree,
//     lastPortfolio:portfolio
// }

// const reducer = combineReducers({
//     siteReducers,
//     commonReducers
// });

const store = createStore(
                        combineReducers({
                            siteReducers,
                            commonReducers
                        }), allData, applyMiddleware(apiMiddleware('http://kanni.pro/api'), thunk, promise, logger));
export default store;
