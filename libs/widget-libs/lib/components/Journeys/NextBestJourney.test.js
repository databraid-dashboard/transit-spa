var _jsxFileName = '../../src/components/Journeys/NextBestJourney.test.jsx',
    _this = this;

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NextBestJourney from './NextBestJourney';

describe('NextBestJourney', function () {
  it('should render when passed required props', function () {
    var timeToLeaveInSeconds = 500;
    var steps = [{ duration: '5 mins', instruction: 'Walk to Some Other St. Station', mode: 'WALKING' }];
    var eta = '12:00pm';
    var conditionStatus = 'on-time';

    var component = mount(React.createElement(NextBestJourney, {
      timeToLeaveInSeconds: timeToLeaveInSeconds,
      steps: steps,
      eta: eta,
      conditionStatus: conditionStatus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });
});