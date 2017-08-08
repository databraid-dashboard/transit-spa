var _jsxFileName = '../../src/components/Journeys/BestJourney.test.jsx',
    _this = this;

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BestJourney from './BestJourney';

describe('BestJourney', function () {
  it('should render when passed required props', function () {
    var timeToLeaveInSeconds = 120;
    var steps = [{ duration: '1 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' }];
    var eta = '11:00am';
    var conditionStatus = 'on-time';

    var component = mount(React.createElement(BestJourney, {
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