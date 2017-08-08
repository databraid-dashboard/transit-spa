var _jsxFileName = '../../src/components/Journeys/Journey/Timer.test.jsx',
    _this = this;

import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer, { decrement, onComplete } from './Timer';

describe('Timer', function () {
  var callback = function callback() {};

  it('renders minutes and seconds when passed seconds as props', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders double-digit minutes and seconds when passed seconds as props', function () {
    var component = shallow(React.createElement(Timer, { seconds: 600, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has decrement method', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: _this
    }));
    expect(component.instance().decrement());
  });

  it('accepts a callback function as props', function () {
    var component = mount(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: _this
    }));
    expect(component.props().onComplete).toEqual(callback);
  });

  it('initializes with currentCount equal to the seconds passed in as props', function () {
    var component = mount(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: _this
    }));
    expect(component.state('currentCount')).toEqual(120);
  });

  it('calls decrement and decreases the currentCount', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: _this
    }));
    expect(component.instance().state.currentCount).toEqual(120);
    component.instance().decrement();
    expect(component.instance().state.currentCount).toEqual(119);
  });

  it('has componentWillUnmount method', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: _this
    }));
    expect(component.instance().componentWillUnmount());
  });

  it('has componentDidMount method', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: _this
    }));
    expect(component.instance().componentDidMount());
  });

  it('has componentWillReceiveProps method', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: _this
    }));
    expect(component.instance().state.currentCount).toEqual(120);
    component.instance().componentWillReceiveProps({ seconds: 300 });
    expect(component.instance().state.currentCount).toEqual(300);
  });

  it('calls onComplete when decrementing to 0', function () {
    var onComplete = jest.fn();
    var component = mount(React.createElement(Timer, { seconds: 1, loading: true, onComplete: onComplete, __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: _this
    }));
    component.instance().decrement();
    expect(onComplete).toHaveBeenCalled();
  });
});