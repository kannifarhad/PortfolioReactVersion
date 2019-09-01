import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import apiMiddleware from '../middleware/api';

let state = {};
const store = createStore(reducer, state, applyMiddleware(apiMiddleware('http://kanni.pro/api'), thunk, promise, logger));

export default store;
