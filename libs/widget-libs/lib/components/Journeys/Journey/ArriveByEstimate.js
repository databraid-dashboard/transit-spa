var _jsxFileName = '../../src/components/Journeys/Journey/ArriveByEstimate.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, List } from 'semantic-ui-react';

var ArriveByEstimate = function ArriveByEstimate(_ref) {
  var eta = _ref.eta;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    },
    React.createElement(Icon, { name: 'clock', size: 'large', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }),
    React.createElement(
      List.Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: _this
      },
      React.createElement(
        List.Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: _this
        },
        'ETA'
      ),
      eta
    )
  );
};

ArriveByEstimate.propTypes = {
  eta: PropTypes.string.isRequired
};

ArriveByEstimate.defaultProps = {
  eta: ''
};

export default ArriveByEstimate;