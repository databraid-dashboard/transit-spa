<<<<<<< HEAD
<<<<<<< HEAD
import { createStore } from 'redux';
import rootReducer from './reducers';
=======
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import Api from './utils/Api';
>>>>>>> Inital dashboard integration
=======
import { createStore } from 'redux';
import rootReducer from './reducers';
>>>>>>> Fix CSS

/* eslint-disable no-underscore-dangle */

var store = createStore(rootReducer);

export default store;