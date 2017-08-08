var _jsxFileName = '../../src/components/AddNewDestination/PlacesAutocompleteForm.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDestination } from '../../actions';

import Api from '../../utils/Api';

export var PlacesAutocompleteForm = function (_Component) {
=======

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDestination } from '../../actions';
import './button.css';

import Api from '../../utils/Api';

var PlacesAutocompleteForm = function (_Component) {
>>>>>>> Inital dashboard integration
  _inherits(PlacesAutocompleteForm, _Component);

  function PlacesAutocompleteForm(props) {
    _classCallCheck(this, PlacesAutocompleteForm);

    var _this = _possibleConstructorReturn(this, (PlacesAutocompleteForm.__proto__ || Object.getPrototypeOf(PlacesAutocompleteForm)).call(this, props));

    _this.reportError = function (message) {
<<<<<<< HEAD
      /* eslint-disable no-alert */
=======
>>>>>>> Inital dashboard integration
      alert(message);
      _this.setState({ address: '' });
    };

    _this.handleFormSubmit = function (event) {
      event.preventDefault();

      Api.fetchJourneys(_this.props.origin, _this.state.address).then(function (result) {
        if (result.length > 1) {
          _this.props.addDestination(_this.state.address);
          _this.props.onClick();
          return;
        }
<<<<<<< HEAD
        _this.reportError('no transit options available');
      }).catch(function (e) {
        return e;
=======
        return _this.reportError('no transit options available');
      }).catch(function (e) {
        console.log(e);
>>>>>>> Inital dashboard integration
      });
    };

    _this.state = { address: '600 Guerrero St, San Francisco, CA 94110' };
    _this.onChange = function (address) {
      return _this.setState({ address: address });
    };
    return _this;
  }

  _createClass(PlacesAutocompleteForm, [{
    key: 'render',
    value: function render() {
      var inputProps = {
        value: this.state.address,
        onChange: this.onChange,
        placeholder: 'Choose a new destination'
      };

      return React.createElement(
        'form',
        { className: 'ui semantic', onSubmit: this.handleFormSubmit, __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 46
=======
            lineNumber: 49
>>>>>>> Inital dashboard integration
          },
          __self: this
        },
        React.createElement(PlacesAutocomplete, { inputProps: inputProps, __source: {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 47
=======
            lineNumber: 50
>>>>>>> Inital dashboard integration
          },
          __self: this
        }),
        React.createElement(
          'button',
<<<<<<< HEAD
          {
            className: 'ui green button',
            id: 'submit-destination',
            type: 'submit',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
=======
          { className: 'ui green button', id: 'submit-destination', type: 'submit', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
>>>>>>> Inital dashboard integration
            },
            __self: this
          },
          'Submit'
        )
      );
    }
  }]);

  return PlacesAutocompleteForm;
}(Component);

PlacesAutocompleteForm.propTypes = {
  onClick: PropTypes.func.isRequired,
<<<<<<< HEAD
  addDestination: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired
=======
  addDestination: PropTypes.func.isRequired
>>>>>>> Inital dashboard integration
};

PlacesAutocompleteForm.defaultProps = {
  onClick: function onClick() {},
<<<<<<< HEAD
  addDestination: function addDestination() {},
  origin: ''
=======
  addDestination: function addDestination() {}
>>>>>>> Inital dashboard integration
};

export var mapStateToProps = function mapStateToProps(state) {
  var origin = state.configuration.currentLocation.address;

  return {
    origin: origin
  };
};

export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDestination: addDestination
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesAutocompleteForm);