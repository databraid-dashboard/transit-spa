function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { combineReducers } from 'redux';
import * as TYPES from '../constants/constants';

export function configuration() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { currentLocation: { address: '44 Tehama St, San Francisco, CA 94105' } };
  var action = arguments[1];

  switch (action.type) {
    case TYPES.UPDATE_CURRENT_LOCATION:
      return {
        currentLocation: Object.assign({}, state.currentLocation, action.currentLocation)
      };

    default:
      return state;
  }
}

export function destinations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { ids: [], byId: {} };
  var action = arguments[1];

  var newDestinationsById = {};
  var destinationsIdsToKeep = [];
  var nextId = void 0;
  switch (action.type) {
    case TYPES.ADD_DESTINATION:
      nextId = state.ids.length ? Math.max.apply(Math, _toConsumableArray(state.ids)) + 1 : 1;

      newDestinationsById.id = nextId;
      newDestinationsById.address = action.destination;

      return {
        ids: [].concat(_toConsumableArray(state.ids), [nextId]),
        byId: Object.assign({}, state.byId, _defineProperty({}, nextId, newDestinationsById))
      };

    case TYPES.REMOVE_DESTINATION:
      destinationsIdsToKeep = state.ids.filter(function (id) {
        return id !== action.destinationId;
      });
      return {
        ids: [].concat(_toConsumableArray(destinationsIdsToKeep)),
        byId: Object.assign({}, state.byId)
      };

    default:
      return state;
  }
}

export function journeys() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { byDestinationId: {} };
  var action = arguments[1];

  var dId = action.destinationId;
  var journeysForDest = void 0;
  var newJourneysByDestinationId = {};
  switch (action.type) {
    case TYPES.ADD_JOURNEYS:
      if (state.byDestinationId[dId]) {
        journeysForDest = [].concat(_toConsumableArray(state.byDestinationId[dId]), _toConsumableArray(action.journeys));
      } else {
        journeysForDest = action.journeys;
      }
      newJourneysByDestinationId[dId] = journeysForDest;
      return {
        byDestinationId: Object.assign({}, state.byDestinationId, newJourneysByDestinationId)
      };

    case TYPES.REMOVE_JOURNEYS:
      newJourneysByDestinationId[dId] = [];
      return {
        byDestinationId: Object.assign({}, state.byDestinationId, newJourneysByDestinationId)
      };

    default:
      return state;
  }
}

export default combineReducers({
  configuration: configuration,
  destinations: destinations,
  journeys: journeys
});