import {LANG_CHANGE, PORTFOLIO_CATEGORY_CHANGE}  from '../actions';

function siteReducer(state = {}, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return state;

    }
}

export default function reducer(state = {}, action){
    switch(action.type){
        case LANG_CHANGE:
                state.config.lang = action.lang;
                return state;

        case PORTFOLIO_CATEGORY_CHANGE:
            return [];

        default:
            return state;
    }
}