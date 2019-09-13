
import {PORTFOLIO_CATEGORY_CHANGE, PHONE_MENU_TOGGLE}  from '../actions';

function siteReducer(state = {}, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return state;

    }
}

export default function reducer(state = {}, action){
    switch(action.type){
       
        case PORTFOLIO_CATEGORY_CHANGE:
            return [];

        case PHONE_MENU_TOGGLE:
                state.site.phoneMenu = !state.site.phoneMenu;
                return state;

        default:
            return state;
    }
}