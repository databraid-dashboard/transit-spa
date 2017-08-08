var _jsxFileName = '../../src/components/AddNewDestination/PlacesAutocompleteForm.test.jsx',
    _this = this;

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PlacesAutocompleteForm } from './PlacesAutocompleteForm';

describe('PlacesAutocompleteForm', function () {
  it('should render an empty form', function () {
    var component = shallow(React.createElement(PlacesAutocompleteForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});

/*
There is a submit button in the form but it's not possible to test it. The
reason is that when mounting the component a Google library is loaded and it
needs to have a window context.
*/