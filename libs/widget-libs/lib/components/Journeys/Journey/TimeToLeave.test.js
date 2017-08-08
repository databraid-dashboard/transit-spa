var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.test.jsx',
    _this = this;

import React from 'react';
<<<<<<< HEAD
import { mount, shallow } from 'enzyme';
=======
import { mount } from 'enzyme';
>>>>>>> Inital dashboard integration
import toJson from 'enzyme-to-json';
import TimeToLeave, { timerExpired } from './TimeToLeave';

describe('TimeToLeave', function () {
<<<<<<< HEAD
  it('renders list item', function () {
    var component = shallow(React.createElement(TimeToLeave, { timeToLeaveInSeconds: 120, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
=======
  it('should render list item', function () {
    var seconds = 120;

    var component = mount(React.createElement(TimeToLeave, { timeToLeaveInSeconds: seconds, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
>>>>>>> Inital dashboard integration
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has timeToLeaveInSeconds prop as a number of seconds', function () {
<<<<<<< HEAD
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
=======
    var seconds = 120;

    var component = mount(React.createElement(TimeToLeave, { timeToLeaveInSeconds: seconds, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    }));
    expect(component.props().timeToLeaveInSeconds).toEqual(seconds);
  });

  it('has timerExpired callback', function () {
    expect(timerExpired()).toEqual(React.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      'RUN!!!'
    ));
>>>>>>> Inital dashboard integration
  });
});