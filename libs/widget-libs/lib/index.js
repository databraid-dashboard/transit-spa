var _jsxFileName = '../../src/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* eslint-disable react/jsx-filename-extension */

ReactDOM.render(React.createElement(
  Provider,
  { store: store, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  },
  React.createElement(App, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })
), document.getElementById('root'));

registerServiceWorker();
export default App;
export { rootReducer };