var _jsxFileName = '../../src/components/Journeys/Journey/Timer.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = { currentCount: props.seconds };
    return _this;
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.decrement();
      }, 1000);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ currentCount: nextProps.seconds });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      var newCount = this.state.currentCount - 1;

      if (newCount >= 1) {
        this.setState({ currentCount: newCount });
      }

      if (newCount === 0) {
        this.props.onComplete();
        clearInterval(this.timerID);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var currentCount = this.state.currentCount;


      var sec = currentCount % 60;
      var min = (currentCount - sec) / 60;

      var seconds = sec < 10 ? '0' + sec : sec;
      var minutes = min < 10 ? '0' + min : min;

      return React.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        },
        minutes,
        ':',
        seconds
      );
    }
  }]);

  return Timer;
}(Component);

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired
};

Timer.defaultProps = {
  seconds: 6,
  onComplete: function onComplete() {}
};

export default Timer;