var _jsxFileName = '../../src/components/Journeys/JourneyTable.test.jsx',
    _this = this;

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { JourneyTable, timeToLeaveConverter, mapDispatchToProps } from './JourneyTable';

describe('JourneyTable', function () {
  var testData = {
    destinationId: 1,
    origin: '',
    destinationsById: { 1: {} },
    journeys: [{
      departureTimeUTC: 1502222222,
      arrivalTimeText: '00:00am',
      transitSteps: [{ duration: '1 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' }, {
        duration: '23 mins',
        instruction: 'Metro rail towards Warm Springs/South Fremont',
        mode: 'TRANSIT'
      }]
    }, {
      departureTimeUTC: 1502222555,
      arrivalTimeText: '00:00pm',
      transitSteps: [{ duration: '4 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' }, {
        duration: '56 mins',
        instruction: 'Metro rail towards Warm Springs/South Fremont',
        mode: 'TRANSIT'
      }]
    }],
    timeToLeaveInSeconds: 1502222223
  };

  it('should render Loading...', function () {
    var component = shallow(React.createElement(JourneyTable, {
      id: 1,
      destinationId: testData.destinationId,
      origin: testData.origin,
      destinationsById: testData.destinationsById,
      journeys: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('mapDispatchToProps', function () {
    var dispatch = jest.fn();

    expect(mapDispatchToProps(dispatch)).toHaveProperty('fetchJourneys');
  });

  it('calls fetchJourneys on load', function () {
    var fetchJourneys = jest.fn();
    var component = mount(React.createElement(JourneyTable, {
      id: 1,
      destinationId: testData.destinationId,
      origin: testData.origin,
      destinationsById: testData.destinationsById,
      journeys: testData.journeys,
      fetchJourneys: fetchJourneys,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: _this
    }));

    expect(fetchJourneys).toHaveBeenCalled();
  });
});

describe('timeToLeaveConverter', function () {
  it('should return positive integer', function () {
    var futureTimeInSeconds = Date.now() + 1000;
    expect(timeToLeaveConverter(futureTimeInSeconds)).toBeGreaterThanOrEqual(1);
  });
});