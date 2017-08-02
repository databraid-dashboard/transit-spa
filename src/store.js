import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Api from './utils/Api';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api })),
);

export default store;
