var _jsxFileName = '../../src/components/Destinations/DestinationRow.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Container, Segment } from 'semantic-ui-react';

import JourneyTable from '../Journeys/JourneyTable';
import DestinationHeader from './Destination/DestinationHeader';
import './destination.css';

export var DestinationRow = function DestinationRow(_ref) {
  var id = _ref.id,
      name = _ref.name;
  return React.createElement(
    Container,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: _this
    },
    React.createElement(
      Segment,
      { compact: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: _this
      },
      React.createElement(DestinationHeader, { name: name, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: _this
      })
    ),
    React.createElement(
      Segment,
      { compact: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: _this
      },
      React.createElement(JourneyTable, { id: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      })
    )
  );
};

DestinationRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

DestinationRow.defaultProps = {
  id: 1,
  name: ''
};

export default DestinationRow;