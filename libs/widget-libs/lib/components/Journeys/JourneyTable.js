var _jsxFileName = '../../src/components/Journeys/JourneyTable.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BestJourney from './BestJourney';
import NextBestJourney from './NextBestJourney';

import { fetchJourneys } from '../../actions';

export function timeToLeaveConverter(departureTimeInSeconds) {
  var currentTimeInSeconds = Date.now() / 1000;
  var diff = departureTimeInSeconds - currentTimeInSeconds;

  return Math.floor(diff);
}

export var JourneyTable = function (_Component) {
  _inherits(JourneyTable, _Component);

  function JourneyTable() {
    _classCallCheck(this, JourneyTable);

    return _possibleConstructorReturn(this, (JourneyTable.__proto__ || Object.getPrototypeOf(JourneyTable)).apply(this, arguments));
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
    key: 'render',
    value: function render() {
      var journeys = this.props.journeys;


      if (!journeys) return React.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
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
            lineNumber: 37
          },
          __self: this
        },
        React.createElement(BestJourney, {
          timeToLeaveInSeconds: timeToLeaveBest,
          steps: bestJourney.transitSteps,
          eta: bestJourney.arrivalTimeText,
          conditionStatus: 'on-time',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }),
        React.createElement(NextBestJourney, {
          timeToLeaveInSeconds: timeToLeaveNextBest,
          steps: nextBestJourney.transitSteps,
          eta: nextBestJourney.arrivalTimeText,
          conditionStatus: 'future undertain -- see journey table',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
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
  journeys: PropTypes.arrayOf(PropTypes.object)
};

JourneyTable.defaultProps = {
  destinationId: 1,
  origin: '',
  destinationsById: { 1: {} },
  fetchJourneys: function fetchJourneys() {},
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
    fetchJourneys: fetchJourneys
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(JourneyTable);