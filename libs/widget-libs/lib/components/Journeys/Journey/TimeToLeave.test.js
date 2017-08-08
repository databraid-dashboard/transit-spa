var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.test.jsx',
    _this = this;

import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeToLeave, { timerExpired } from './TimeToLeave';

describe('TimeToLeave', function () {
  it('renders list item', function () {
    var component = shallow(React.createElement(TimeToLeave, { timeToLeaveInSeconds: 120, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has timeToLeaveInSeconds prop as a number of seconds', function () {
    var component = mount(React.createElement(TimeToLeave, { timeToLeaveInSeconds: 120, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    }));
    expect(component.props().timeToLeaveInSeconds).toEqual(120);
  });

  it('has timerExpired method', function () {
    var component = shallow(React.createElement(TimeToLeave, { timeToLeaveInSeconds: 120, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: _this
    }));
    expect(component.instance().timerExpired());
  });
});