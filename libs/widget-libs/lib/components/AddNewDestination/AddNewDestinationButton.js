var _jsxFileName = '../../src/components/AddNewDestination/AddNewDestinationButton.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

var AddNewDestinationButton = function AddNewDestinationButton(_ref) {
  var onClick = _ref.onClick;
  return React.createElement(
    'div',
    { id: 'button-div', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: _this
    },
    React.createElement(Button, {
      className: 'transit-button',
      circular: true,
      icon: 'plus',
      size: 'massive',
      color: 'blue',
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    })
  );
};

AddNewDestinationButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

AddNewDestinationButton.defaultProps = {
  onClick: function onClick() {}
};

export default AddNewDestinationButton;