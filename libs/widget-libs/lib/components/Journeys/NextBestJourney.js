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
      conditionStatus = _ref.conditionStatus,
      callRefreshJourneys = _ref.callRefreshJourneys;
  return React.createElement(
    Segment,
    { tertiary: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: _this
    },
    React.createElement(
      List,
      { divided: true, horizontal: true, size: 'huge', __source: {
          fileName: _jsxFileName,
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
        },
        __self: _this
      }),
      React.createElement(JourneyVisualization, { active: true, steps: steps, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: _this
      }),
      React.createElement(ArriveByEstimate, { eta: eta, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      }),
      React.createElement(CurrentConditionsStatus, { conditionStatus: conditionStatus, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
  conditionStatus: PropTypes.string.isRequired,
  callRefreshJourneys: PropTypes.func.isRequired
};

NextBestJourney.defaultProps = {
  timeToLeaveInSeconds: 1,
  steps: [{}],
  eta: '',
  conditionStatus: 'on-time',
  callRefreshJourneys: function callRefreshJourneys() {}
};

export default NextBestJourney;