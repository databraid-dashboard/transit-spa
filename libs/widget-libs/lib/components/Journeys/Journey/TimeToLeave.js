<<<<<<< HEAD
var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
=======
var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.jsx',
    _this = this;

import React from 'react';
>>>>>>> Inital dashboard integration
import PropTypes from 'prop-types';

import { Icon, List } from 'semantic-ui-react';
import Timer from './Timer';

<<<<<<< HEAD
var TimeToLeave = function (_Component) {
  _inherits(TimeToLeave, _Component);

  function TimeToLeave(props) {
    _classCallCheck(this, TimeToLeave);

    var _this = _possibleConstructorReturn(this, (TimeToLeave.__proto__ || Object.getPrototypeOf(TimeToLeave)).call(this, props));

    _this.timerExpired = _this.timerExpired.bind(_this);
    return _this;
  }

  _createClass(TimeToLeave, [{
    key: 'timerExpired',
    value: function timerExpired() {
      this.props.callRefreshJourneys();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        List.Item,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        React.createElement(Icon, { name: 'hourglass half', size: 'large', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        React.createElement(
          List.Content,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          React.createElement(
            List.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            'leave in'
          ),
          React.createElement(Timer, { seconds: this.props.timeToLeaveInSeconds, onComplete: this.timerExpired, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        )
      );
    }
  }]);

  return TimeToLeave;
}(Component);

TimeToLeave.propTypes = {
  timeToLeaveInSeconds: PropTypes.number.isRequired,
  callRefreshJourneys: PropTypes.func.isRequired
};

TimeToLeave.defaultProps = {
  timeToLeaveInSeconds: 5,
  callRefreshJourneys: function callRefreshJourneys() {}
=======
export function timerExpired() {
  return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    },
    'RUN!!!'
  );
}

var TimeToLeave = function TimeToLeave(_ref) {
  var timeToLeaveInSeconds = _ref.timeToLeaveInSeconds;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    },
    React.createElement(Icon, { name: 'hourglass half', size: 'large', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    }),
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
        'leave in'
      ),
      React.createElement(Timer, { seconds: timeToLeaveInSeconds, onComplete: timerExpired, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      })
    )
  );
};

TimeToLeave.propTypes = {
  timeToLeaveInSeconds: PropTypes.number.isRequired
};

TimeToLeave.defaultProps = {
  timeToLeaveInSeconds: 5
>>>>>>> Inital dashboard integration
};

export default TimeToLeave;