var _jsxFileName = '../../src/components/AddNewDestination/AddNewDestinationButton.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddNewDestinationButton from './AddNewDestinationButton';

describe('AddNewDestinationButton', function () {
  it('should render button', function () {
    var component = shallow(React.createElement(AddNewDestinationButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});