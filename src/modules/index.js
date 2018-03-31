/* redux */
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
/* react-router */
// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

/* My modules */
import { __listReducer, __Action } from './list'

// Build reducers
const Reducer = combineReducers({
    __listReducer
});

// Build store to use "redux"
const store = createStore(
    Reducer,
    applyMiddleware(thunk, logger)
);

// const history = syncHistoryWithStore(browserHistory, store);

export { store, __Action } ;