var _jsxFileName = '../../src/components/Destinations/DestinationTable.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DestinationTable } from './DestinationTable';

describe('DestinationTable', function () {
  it('should render an empty table', function () {
    var component = shallow(React.createElement(DestinationTable, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});