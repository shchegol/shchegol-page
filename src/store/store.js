import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mainReducer } from '../reducers/mainReducer';

const store = createStore(mainReducer, { cardSide: "" });

export default store;
