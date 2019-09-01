import {GET_CONFIG ,GET_MENUS, GET_LANGLIST, GET_TRANSLATIONS} from '../actions';

export default function reducer(state = {}, action) {

    switch(action.type) {
        case GET_CONFIG:
            return Object.assign({}, state, {
                config: action.data
            });

        case GET_MENUS:
            return Object.assign({}, state, {
                menusList: action.data
            });

        case GET_LANGLIST:
            return Object.assign({}, state, {
                langList: action.data
            });

        case GET_TRANSLATIONS:
            return Object.assign({}, state, {
                translations: action.data
            });

        default:
            return state;
    }
}