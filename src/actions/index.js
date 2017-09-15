import * as TYPES from '../constants/constants';

export function updateCurrentLocation() {
  return async (dispatch, getState, { TRANSIT_API }) => {
    dispatch({
      type: TYPES.GEOLOCATING,
    });

    const location = await TRANSIT_API.getCurrentLocation();

    return dispatch({
      type: TYPES.UPDATE_CURRENT_LOCATION,
      currentLocation: location,
    });
  };
}

export function addDestination(dest) {
  return {
    type: TYPES.ADD_DESTINATION,
    destination: dest,
  };
}

export function addJourneys(destinationId, journeys) {
  return {
    type: TYPES.ADD_JOURNEYS,
    destinationId,
    journeys,
  };
}

export function removeJourneys(destinationId) {
  return {
    type: TYPES.REMOVE_JOURNEYS,
    destinationId,
  };
}

export function removeDestination(destinationId) {
  return {
    type: TYPES.REMOVE_DESTINATION,
    destinationId,
  };
}

export function refreshJourneys(destinationId, origin, destination) {
  return async (dispatch, getState, { TRANSIT_API, HELPERS }) => {
    const journeys = await TRANSIT_API.fetchJourneys(origin, destination);
    const journeysOffset = await HELPERS.offsetJourneys(journeys);

    dispatch(removeJourneys(destinationId));
    dispatch(addJourneys(destinationId, journeysOffset));
  };
}

export function fetchJourneys(destinationId, origin, destination) {
  return async (dispatch, getState, { TRANSIT_API, HELPERS }) => {
    const journeys = await TRANSIT_API.fetchJourneys(origin, destination);
    const alerts = await TRANSIT_API.fetchAlerts();

    const journeysWithAlerts = await HELPERS.applyAlerts(journeys, alerts);
    const journeysOffset = await HELPERS.offsetJourneys(journeysWithAlerts);

    dispatch(removeJourneys(destinationId));
    dispatch(addJourneys(destinationId, journeysOffset));
    dispatch({
      type: TYPES.ALERTS_RETRIEVED,
      alerts,
    });
  };
}
