var _jsxFileName = '../../src/components/Journeys/JourneyTable.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD
import { fetchJourneys, refreshJourneys } from '../../actions';
=======
>>>>>>> Inital dashboard integration

import BestJourney from './BestJourney';
import NextBestJourney from './NextBestJourney';

<<<<<<< HEAD
export function timeToLeaveConverter(departureTimeInSeconds) {
  var currentTimeInSeconds = Date.now() / 1000;
  var diff = departureTimeInSeconds - currentTimeInSeconds;
=======
import { fetchJourneys } from '../../actions';

export function timeToLeaveConverter(departureTimeInSeconds) {
  var currentTimeInSeconds = Date.now() / 1000;
  var diff = departureTimeInSeconds - currentTimeInSeconds;

>>>>>>> Inital dashboard integration
  return Math.floor(diff);
}

export var JourneyTable = function (_Component) {
  _inherits(JourneyTable, _Component);

<<<<<<< HEAD
  function JourneyTable(props) {
    _classCallCheck(this, JourneyTable);

    var _this = _possibleConstructorReturn(this, (JourneyTable.__proto__ || Object.getPrototypeOf(JourneyTable)).call(this, props));

    _this.callRefreshJourneys = _this.callRefreshJourneys.bind(_this);
    return _this;
=======
  function JourneyTable() {
    _classCallCheck(this, JourneyTable);

    return _possibleConstructorReturn(this, (JourneyTable.__proto__ || Object.getPrototypeOf(JourneyTable)).apply(this, arguments));
>>>>>>> Inital dashboard integration
  }

  _createClass(JourneyTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          destinationId = _props.destinationId,
          origin = _props.origin,
          destinationsById = _props.destinationsById;

      this.props.fetchJourneys(destinationId, origin, destinationsById[destinationId].address);
    }
  }, {
<<<<<<< HEAD
    key: 'callRefreshJourneys',
    value: function callRefreshJourneys() {
      var _props2 = this.props,
          destinationId = _props2.destinationId,
          origin = _props2.origin,
          destinationsById = _props2.destinationsById;

      this.props.refreshJourneys(destinationId, origin, destinationsById[destinationId].address);
    }
  }, {
=======
>>>>>>> Inital dashboard integration
    key: 'render',
    value: function render() {
      var journeys = this.props.journeys;


<<<<<<< HEAD
      if (!journeys || journeys.length === 0) return React.createElement(
=======
      if (!journeys) return React.createElement(
>>>>>>> Inital dashboard integration
        'div',
        {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 37
=======
            lineNumber: 28
>>>>>>> Inital dashboard integration
          },
          __self: this
        },
        'Loading...'
      );

      var bestJourney = journeys[0];
      var nextBestJourney = journeys[1];

      var timeToLeaveBest = timeToLeaveConverter(bestJourney.departureTimeUTC);
      var timeToLeaveNextBest = timeToLeaveConverter(nextBestJourney.departureTimeUTC);

      return React.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 46
=======
            lineNumber: 37
>>>>>>> Inital dashboard integration
          },
          __self: this
        },
        React.createElement(BestJourney, {
          timeToLeaveInSeconds: timeToLeaveBest,
          steps: bestJourney.transitSteps,
          eta: bestJourney.arrivalTimeText,
          conditionStatus: 'on-time',
<<<<<<< HEAD
          callRefreshJourneys: this.callRefreshJourneys,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
=======
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
>>>>>>> Inital dashboard integration
          },
          __self: this
        }),
        React.createElement(NextBestJourney, {
          timeToLeaveInSeconds: timeToLeaveNextBest,
          steps: nextBestJourney.transitSteps,
          eta: nextBestJourney.arrivalTimeText,
          conditionStatus: 'future undertain -- see journey table',
<<<<<<< HEAD
          callRefreshJourneys: this.callRefreshJourneys,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
=======
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
>>>>>>> Inital dashboard integration
          },
          __self: this
        })
      );
    }
  }]);

  return JourneyTable;
}(Component);

JourneyTable.propTypes = {
  destinationId: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  destinationsById: PropTypes.shape({
    1: PropTypes.object
  }).isRequired,
  fetchJourneys: PropTypes.func.isRequired,
<<<<<<< HEAD
  refreshJourneys: PropTypes.func.isRequired,
=======
>>>>>>> Inital dashboard integration
  journeys: PropTypes.arrayOf(PropTypes.object)
};

JourneyTable.defaultProps = {
  destinationId: 1,
  origin: '',
  destinationsById: { 1: {} },
  fetchJourneys: function fetchJourneys() {},
<<<<<<< HEAD
  refreshJourneys: function refreshJourneys() {},
=======
>>>>>>> Inital dashboard integration
  journeys: [{
    departureTimeUTC: Date.now(),
    arrivalTimeText: '00:00am',
    transitSteps: [{ duration: '1 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' }, {
      duration: '23 mins',
      instruction: 'Metro rail towards Warm Springs/South Fremont',
      mode: 'TRANSIT'
    }]
  }, {
    departureTimeUTC: Date.now(),
    arrivalTimeText: '00:00pm',
    transitSteps: [{ duration: '4 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' }, {
      duration: '56 mins',
      instruction: 'Metro rail towards Warm Springs/South Fremont',
      mode: 'TRANSIT'
    }]
  }]
};
export var mapStateToProps = function mapStateToProps(state, ownProps) {
  var origin = state.configuration.currentLocation.address;
  var destinationsById = state.destinations.byId;
  var destinationId = ownProps.id;
  var journeys = state.journeys.byDestinationId[destinationId];

  return {
    origin: origin,
    journeys: journeys,
    destinationId: destinationId,
    destinationsById: destinationsById
  };
};

export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
<<<<<<< HEAD
    fetchJourneys: fetchJourneys,
    refreshJourneys: refreshJourneys
=======
    fetchJourneys: fetchJourneys
>>>>>>> Inital dashboard integration
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(JourneyTable);