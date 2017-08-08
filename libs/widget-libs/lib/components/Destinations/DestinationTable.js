var _jsxFileName = '../../src/components/Destinations/DestinationTable.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Segment } from 'semantic-ui-react';
import DestinationRow from './DestinationRow';

export var DestinationTable = function DestinationTable(_ref) {
  var destinationIds = _ref.destinationIds,
      destinationsById = _ref.destinationsById;

  if (!destinationIds) return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: _this
    },
    'Loading...'
  );

  return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    },
    destinationIds.map(function (id) {
      return React.createElement(
        Segment,
        { key: id, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: _this
        },
        React.createElement(DestinationRow, { id: id, name: destinationsById[id].address, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: _this
        })
      );
    })
  );
};

DestinationTable.propTypes = {
  destinationIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  destinationsById: PropTypes.shape({
    1: PropTypes.object
  }).isRequired
};

DestinationTable.defaultProps = {
  destinationIds: [1],
  destinationsById: { 1: {} }
};

export var mapStateToProps = function mapStateToProps(state) {
  var destinationIds = state.destinations.ids;
  var destinationsById = state.destinations.byId;

  return {
    destinationIds: destinationIds,
    destinationsById: destinationsById
  };
};

export default connect(mapStateToProps, null)(DestinationTable);