var _jsxFileName = '../../src/App.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', function () {
  it('renders without exploding', function () {
    shallow(React.createElement(App, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    }));
  });
});