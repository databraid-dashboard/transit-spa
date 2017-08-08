var _jsxFileName = '../../src/components/Destinations/DestinationRow.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DestinationRow } from './DestinationRow';

describe('DestinationRow', function () {
  it('should render an empty form', function () {
    var component = shallow(React.createElement(DestinationRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});