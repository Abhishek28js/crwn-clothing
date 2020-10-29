import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducers from './root-reducer';

const Middlewares=[logger];

const store=createStore(rootReducers,applyMiddleware(...Middlewares));

export default store;