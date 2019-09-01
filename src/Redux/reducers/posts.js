import { GET_POST, GET_POSTS_LIST} from '../actions';

export default function reducer(state = {}, action) {
    switch(action.type) {

        case GET_POST:
            return Object.assign({}, state, {
                [action.data.slug]: action.data
            });

        case GET_POSTS_LIST:
            return Object.assign({}, state, {
                [action.data.pageinfo.slug]: action.data
            });

        default:
            return state;
    }
}