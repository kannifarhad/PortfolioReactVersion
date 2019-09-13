import {LANG_CHANGE, GET_CONFIG ,GET_MENUS, GET_LANGLIST, GET_TRANSLATIONS, SEND_CONTACT} from '../actions';

export default function reducer(state = {}, action) {

    switch(action.type) {
        case GET_CONFIG:
            return Object.assign({}, state, {
                config: action.data
            });
        case LANG_CHANGE:
            return {...state, config: {...state.config, lang:action.lang}};

        case GET_MENUS:
            return Object.assign({}, state, {
                menusList: action.data
            });

        case GET_LANGLIST:
            return Object.assign({}, state, {
                langList: action.data
            });

        case SEND_CONTACT:
            return Object.assign({}, state, {
                contactMessage: action.data
            });

        case GET_TRANSLATIONS:
            return Object.assign({}, state, {
                translations: action.data
            });

        default:
            return state;
    }
}