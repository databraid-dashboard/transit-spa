var _jsxFileName = '../../src/components/AddNewDestination/AddNewDestinationModal.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddNewDestinationModal from './AddNewDestinationModal';

describe('AddNewDestinationModal', function () {
  it('should render modal', function () {
    var component = shallow(React.createElement(AddNewDestinationModal, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});