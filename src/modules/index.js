/* redux */
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

/* My modules */
import { __Reducer } from './list'

// Build reducers
const Reducer = combineReducers({
    __Reducer
});

// Build store to use "redux"
const store = createStore(
    Reducer,
    applyMiddleware(thunk, logger)
);

export default store;