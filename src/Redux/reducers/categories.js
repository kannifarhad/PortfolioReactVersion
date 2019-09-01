import {GET_CATEGORY, GET_CATEGORY_LIST} from '../actions';

export default function reducer(state = {}, action) {
    switch(action.type) {
        case GET_CATEGORY:
                return Object.assign({}, state, {
                    [action.data.slug]: action.data
                });

        case GET_CATEGORY_LIST:
            return state;

        default:
            return state;
    }
}