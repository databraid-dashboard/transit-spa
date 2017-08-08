var _jsxFileName = '../../src/components/AddNewDestination/AddNewDestinationRow.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddNewDestinationRow from './AddNewDestinationRow';

describe('AddNewDestinationRow', function () {
  it('should render row', function () {
    var component = shallow(React.createElement(AddNewDestinationRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});