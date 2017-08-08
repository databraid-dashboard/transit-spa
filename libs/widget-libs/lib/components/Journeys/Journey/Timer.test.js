var _jsxFileName = '../../src/components/Journeys/Journey/Timer.test.jsx',
    _this = this;

import React from 'react';
<<<<<<< HEAD
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer, { decrement, onComplete } from './Timer';

describe('Timer', function () {
  var callback = function callback() {};

  it('renders minutes and seconds when passed seconds as props', function () {
    var component = shallow(React.createElement(Timer, { seconds: 120, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
=======
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer from './Timer';

describe('Timer', function () {
  it('renders when passed seconds as props', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
>>>>>>> Inital dashboard integration
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

<<<<<<< HEAD
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
=======
  it('accepts a callback function as props', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = mount(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
>>>>>>> Inital dashboard integration
      },
      __self: _this
    }));
    expect(component.props().onComplete).toEqual(callback);
  });

<<<<<<< HEAD
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
=======
  it('initializes with count equal the the seconds and expired equal to false in the state', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = mount(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: _this
    }));
    expect(component.state('count')).toEqual(120);
    expect(component.state('expired')).toEqual(false);
  });

  it('calls decrementOrExpire and decreases the count', function () {
    var seconds = 120;
    var expected = { count: seconds - 1 };
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: _this
    }));
    expect(component.instance().state.count).toEqual(seconds);
    expect(component.instance().decrementOrExpire().count).toEqual(expected.count);
  });

  it('has componentWillReceiveProps', function () {
    var initialSeconds = 120;
    var newSeconds = 300;
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: initialSeconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: _this
    }));
    expect(component.instance().state.count).toEqual(initialSeconds);
    // expect(component.instance().componentWillReceiveProps(newSeconds).count).toEqual(newSeconds);
>>>>>>> Inital dashboard integration
  });
});