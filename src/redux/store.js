import {createStore} from 'redux';
import {combineReducers} from "redux";
import counter from 'reducers/counter';

let store = createStore(combineReducers({counter}));

export default store;