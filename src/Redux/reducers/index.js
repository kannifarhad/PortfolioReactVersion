import { combineReducers } from 'redux';
import siteReducers from './sitereducers';
import commonReducers from './common';
import postsReducers from './posts';
import categoryReducers from './categories';

const reducer = combineReducers({
    site:siteReducers,
    common:commonReducers,
    posts:postsReducers,
    categories:categoryReducers
});

export default reducer;