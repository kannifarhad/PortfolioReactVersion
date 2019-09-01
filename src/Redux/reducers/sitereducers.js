
import {LANG_CHANGE, PORTFOLIO_CATEGORY_CHANGE, PHONE_MENU_TOGGLE}  from '../actions';

function siteReducer(state = {}, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return state;

    }
}

export default function reducer(state = {}, action){
    switch(action.type){
        case LANG_CHANGE:
                console.log(state);
                //state.config.lang = action.lang;
                return state;
                // return state.config.filter(lang => !action.lang);

        case PORTFOLIO_CATEGORY_CHANGE:
            return [];

        case PHONE_MENU_TOGGLE:
                state.site.phoneMenu = !state.site.phoneMenu;
                return state;

        default:
            return state;
    }
}