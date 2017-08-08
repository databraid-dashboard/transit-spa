var _jsxFileName = '../../src/components/Journeys/Journey/JourneyVisualization.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, List, Step } from 'semantic-ui-react';

<<<<<<< HEAD
function formatAgency(step) {
  var output = '';
  if (step.mode.includes('WALKING')) {
    output = 'Walk';
  }
  if (step.agency) {
    output = step.agency.replace(/Bay Area Rapid Transit/, 'BART');
  }
  return output;
}

function getInstructions(step) {
  var instr = '';
  if (!step) {
    return instr;
  }
  if (step.shortName) {
    if (step.instruction.startsWith('Bus ')) {
      instr = step.instruction.replace(/^Bus /, 'Bus ' + step.shortName + ' ');
    } else {
      instr = step.shortName + ' ' + step.instruction;
    }
  } else {
    instr = step.instruction;
  }
  instr = instr.replace(/^Walk /, '');
  instr = instr.replace(/San Francisco International Airport/, 'SF Intl. Airport');
  return instr;
}

=======
>>>>>>> Inital dashboard integration
var JourneyVisualization = function JourneyVisualization(_ref) {
  var active = _ref.active,
      steps = _ref.steps;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 37
=======
        lineNumber: 7
>>>>>>> Inital dashboard integration
      },
      __self: _this
    },
    React.createElement(
      Step.Group,
      {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 38
=======
          lineNumber: 8
>>>>>>> Inital dashboard integration
        },
        __self: _this
      },
      steps.map(function (step, index) {
        var name = void 0;
<<<<<<< HEAD
=======
        var title = void 0;
>>>>>>> Inital dashboard integration

        if (step.mode === 'WALKING' && index !== 0) return null;

        if (step.mode.includes('WALKING')) {
          name = 'blind';
<<<<<<< HEAD
=======
          title = 'Walk';
>>>>>>> Inital dashboard integration
        }

        if (step.mode === 'TRANSIT') {
          name = step.instruction.includes('rail') ? 'subway' : 'bus';
<<<<<<< HEAD
        }

        var uniqueKey = step.shortName + step.instruction;
        var agency = formatAgency(step);
        var instructions = getInstructions(step);

        return React.createElement(
          Step,
          { disabled: active, key: uniqueKey, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
=======
          title = step.instruction.includes('rail') ? 'Train' : 'Bus';
        }

        return React.createElement(
          Step,
          { disabled: active, key: step.instruction, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
>>>>>>> Inital dashboard integration
            },
            __self: _this
          },
          React.createElement(Icon, { name: name, size: 'big', __source: {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 58
            },
            __self: _this
          }),
          React.createElement(Step.Content, { title: agency, description: instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
=======
              lineNumber: 27
            },
            __self: _this
          }),
          React.createElement(Step.Content, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
>>>>>>> Inital dashboard integration
            },
            __self: _this
          })
        );
      })
    )
  );
};

JourneyVisualization.propTypes = {
  active: PropTypes.bool.isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired
};

JourneyVisualization.defaultProps = {
  active: null,
  steps: [{}]
};

export default JourneyVisualization;