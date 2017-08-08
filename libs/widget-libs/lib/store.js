import { createStore } from 'redux';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */

var store = createStore(rootReducer);

export default store;