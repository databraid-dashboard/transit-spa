var _jsxFileName = '../../src/components/Journeys/Journey/CurrentConditionsStatus.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, List, Popup } from 'semantic-ui-react';

var style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em'
};

var CurrentConditionsStatus = function CurrentConditionsStatus(_ref) {
  var conditionStatus = _ref.conditionStatus;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    },
    React.createElement(
      List.Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: _this
      },
      React.createElement(
        List.Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: _this
        },
        'status:'
      ),
      React.createElement(Popup, {
        trigger: React.createElement(Icon, {
          name: conditionStatus === 'on-time' ? 'checkmark' : 'exclamation triangle',
          size: 'large',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: _this
        }),
        content: conditionStatus,
        style: style,
        offset: 50,
        position: 'right center',
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      })
    )
  );
};

CurrentConditionsStatus.propTypes = {
  conditionStatus: PropTypes.string.isRequired
};

CurrentConditionsStatus.defaultProps = {
  conditionStatus: ''
};

export default CurrentConditionsStatus;