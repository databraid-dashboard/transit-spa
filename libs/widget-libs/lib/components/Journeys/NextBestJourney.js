var _jsxFileName = '../../src/components/Journeys/NextBestJourney.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { List, Segment } from 'semantic-ui-react';

import TimeToLeave from './Journey/TimeToLeave';
import JourneyVisualization from './Journey/JourneyVisualization';
import ArriveByEstimate from './Journey/ArriveByEstimate';
import CurrentConditionsStatus from './Journey/CurrentConditionsStatus';

var NextBestJourney = function NextBestJourney(_ref) {
  var timeToLeaveInSeconds = _ref.timeToLeaveInSeconds,
      steps = _ref.steps,
      eta = _ref.eta,
<<<<<<< HEAD
      conditionStatus = _ref.conditionStatus,
      callRefreshJourneys = _ref.callRefreshJourneys;
=======
      conditionStatus = _ref.conditionStatus;
>>>>>>> Inital dashboard integration
  return React.createElement(
    Segment,
    { tertiary: true, __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 18
=======
        lineNumber: 12
>>>>>>> Inital dashboard integration
      },
      __self: _this
    },
    React.createElement(
      List,
      { divided: true, horizontal: true, size: 'huge', __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 19
        },
        __self: _this
      },
      React.createElement(TimeToLeave, {
        timeToLeaveInSeconds: timeToLeaveInSeconds,
        callRefreshJourneys: callRefreshJourneys,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
=======
          lineNumber: 13
        },
        __self: _this
      },
      React.createElement(TimeToLeave, { timeToLeaveInSeconds: timeToLeaveInSeconds, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
>>>>>>> Inital dashboard integration
        },
        __self: _this
      }),
      React.createElement(JourneyVisualization, { active: true, steps: steps, __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 24
=======
          lineNumber: 15
>>>>>>> Inital dashboard integration
        },
        __self: _this
      }),
      React.createElement(ArriveByEstimate, { eta: eta, __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 25
=======
          lineNumber: 16
>>>>>>> Inital dashboard integration
        },
        __self: _this
      }),
      React.createElement(CurrentConditionsStatus, { conditionStatus: conditionStatus, __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 26
=======
          lineNumber: 17
>>>>>>> Inital dashboard integration
        },
        __self: _this
      })
    )
  );
};

NextBestJourney.propTypes = {
  timeToLeaveInSeconds: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  eta: PropTypes.string.isRequired,
<<<<<<< HEAD
  conditionStatus: PropTypes.string.isRequired,
  callRefreshJourneys: PropTypes.func.isRequired
=======
  conditionStatus: PropTypes.string.isRequired
>>>>>>> Inital dashboard integration
};

NextBestJourney.defaultProps = {
  timeToLeaveInSeconds: 1,
  steps: [{}],
  eta: '',
<<<<<<< HEAD
  conditionStatus: 'on-time',
  callRefreshJourneys: function callRefreshJourneys() {}
=======
  conditionStatus: 'on-time'
>>>>>>> Inital dashboard integration
};

export default NextBestJourney;