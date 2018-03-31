/* action */
// fetch data to use axios
import axios from "axios/index";

const STATUS = {
    FETCH_ARTICLES: 'FETCH_ARTICLES',
    RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
    CATCH_ERROR: 'CATCH_ERROR'
};

export const __Action = {
    // ready to fetch data
    fetchArticles: () => ({
        type: STATUS.FETCH_ARTICLES
    }),
    // set a data from a result that API called.
    receiveArticles: (result) => ({
        type: STATUS.RECEIVE_ARTICLES,
        list: result,
        receiveAt: Date.now()
    }),
    // catch an error
    catchError: (err) => ({
        type: STATUS.CATCH_ERROR,
        err: err,
        receiveAt: Date.now()
    }),
    // Get articles
    getArticles: () => (
        dispatch => {
            dispatch(__Action.fetchArticles()); // Notify a current status
            return axios.get('http://localhost:8080/index')
                .then(res => {
                    dispatch(__Action.receiveArticles(res.data)); // Notify to succeed acquiring data from the server
                }).catch(res => {
                    dispatch(__Action.catchError(res)); // Notification an error
                });
        }
    )
};

/* reducer */
// Initialized value.
const __state = {
    isFetch: false,
    list: []
};

export const __listReducer = (state = [__state], action) => {
    switch (action.type) {
        // case 'ADD_ARTICLE':
        //     return [];
        // case 'UPDATE_ARTICLE':
        //     return [];
        // case 'DELETE_ARTICLE':
        //     return [];
        case STATUS.FETCH_ARTICLES:
            return [
                ...state,
                {
                    isFetch: true,
                    list: []
                }
            ];
        case STATUS.RECEIVE_ARTICLES:
            return [
                ...state,
                {
                    isFetch: false,
                    list: action.list,
                    lastUpdated: action.receiveAt
                }
            ];
        case STATUS.CATCH_ERROR:
            return [
                ...state,
                {
                    isFetch: false,
                    error: action.err,
                    lastUpdated: action.receiveAt
                }
            ];
        default:
            return state
    }
};
