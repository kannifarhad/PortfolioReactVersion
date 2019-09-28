import axios from 'axios';

const apiMiddleware = apiUrl => store => next => action => {
    if (!action.request) {
        return next(action);
    }

    let REQUEST, SUCCESS, FAILURE;
    let configs = {
        headers: {
             'Content-Type': 'application/x-www-form-urlencoded' 
        }
    }
    if (action.types) {
        [REQUEST, SUCCESS, FAILURE] = action.types;
    } else {
        REQUEST = `${action.type}_REQUEST`;
        SUCCESS = action.type;
        FAILURE = `${action.type}_FAILURE`;
    }
    next({ type: REQUEST });
    return axios({
        method: action.request.method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: `${apiUrl}${action.request.url}`,
        data: action.body
    }).then(({ data }) => next({
            type: SUCCESS,
            data
        }))
    .catch(error => {
        next({
        type: FAILURE,
        error: error.message
        });
        throw error; 
    });
};

export default apiMiddleware;