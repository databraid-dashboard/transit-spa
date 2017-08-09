let _jsxFileName = '../../src/App.jsx',
  _this = this;

import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import DestinationTable from './components/Destinations/DestinationTable';
import AddNewDestinationRow from './components/AddNewDestination/AddNewDestinationRow';
import './App.css';

const App = function App() {
  return React.createElement(
    'div',
    { className: 'transit-container', __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
      },
      __self: _this,
    },
    React.createElement(
      Container,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
        },
        __self: _this,
      },
      React.createElement(
        Grid,
<<<<<<< HEAD
        { className: 'transit-container', padded: true, centered: true, __source: {
=======
        {
          padded: true,
          centered: true,
          __source: {
>>>>>>> Fix CSS
            fileName: _jsxFileName,
            lineNumber: 10,
          },
          __self: _this,
        },
        React.createElement(
          Grid.Column,
<<<<<<< HEAD
          { className: 'transit-container', __source: {
=======
          {
            id: 'content-container',
            __source: {
>>>>>>> Fix CSS
              fileName: _jsxFileName,
              lineNumber: 11,
            },
            __self: _this,
          },
          React.createElement(
            Grid.Row,
            {
              id: 'destinations-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
              },
              __self: _this,
            },
            React.createElement(DestinationTable, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
              },
              __self: _this,
            }),
          ),
          React.createElement(
            Grid.Row,
<<<<<<< HEAD
<<<<<<< HEAD
            {
              className: 'transit-container',
              id: 'new-destinations-container',
              __source: {
=======
            { id: 'new-destination-container', __source: {
>>>>>>> Inital dashboard integration
=======
            {
              id: 'new-destination-container',
              __source: {
>>>>>>> Fix CSS
                fileName: _jsxFileName,
                lineNumber: 16,
              },
              __self: _this,
            },
            React.createElement(
              Segment,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              { className: 'transit-container', textAlign: 'center', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
=======
              {
                __source: {
=======
              { textAlign: 'center', __source: {
>>>>>>> Fix CSS
                  fileName: _jsxFileName,
                  lineNumber: 17
>>>>>>> Inital dashboard integration
=======
              {
                textAlign: 'center',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
>>>>>>> Fix CSS
                },
                __self: _this,
              },
              React.createElement(AddNewDestinationRow, {
                __source: {
                  fileName: _jsxFileName,
<<<<<<< HEAD
<<<<<<< HEAD
                  lineNumber: 21
=======
                  lineNumber: 18
>>>>>>> Inital dashboard integration
=======
                  lineNumber: 18,
>>>>>>> Fix CSS
                },
                __self: _this,
              }),
            ),
          ),
        ),
      ),
    ),
  );
};

export default App;
