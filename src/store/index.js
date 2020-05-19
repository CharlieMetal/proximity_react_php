import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { assetsListReducer } from './../reducers/assetsListReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(assetsListReducer, {}, 
    composeEnhancers(applyMiddleware(thunkMiddleware)));