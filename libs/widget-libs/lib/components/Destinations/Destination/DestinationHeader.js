var _jsxFileName = '../../src/components/Destinations/Destination/DestinationHeader.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';
import '../destination.css';

var DestinationHeader = function DestinationHeader(_ref) {
  var name = _ref.name;
  return React.createElement(
    Header,
    { as: 'h1', className: 'destination-header', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    },
    name
  );
};

DestinationHeader.propTypes = {
  name: PropTypes.string.isRequired
};

DestinationHeader.defaultProps = {
  name: ''
};

export default DestinationHeader;