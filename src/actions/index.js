import * as TYPES from '../constants/constants';

export function updateCurrentLocation(location) {
  return {
    type: TYPES.UPDATE_CURRENT_LOCATION,
    currentLocation: location,
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

export function removeJourney(destinationId, index) {
  return {
    type: TYPES.REMOVE_JOURNEY,
    destinationId,
    index,
  };
}

export function removeDestination(destinationId) {
  return {
    type: TYPES.REMOVE_DESTINATION,
    destinationId,
  };
}

export function fetchAlerts() {
  return async (dispatch, getState, { Api }) => {
    const alertsById = await Api.fetchAlerts();
    dispatch({
      type: TYPES.ALERTS_RETRIEVED,
      alerts: alertsById,
    });

    return alertsById;
  };
}

export function fetchJourneys(destinationId, origin, destination) {
  return async (dispatch, getState, { Api }) => {
    const json = await Api.fetchJourneys(origin, destination);
    const state = getState();
    const alerts = state.alerts.alerts;
    const journeys = json.map((rawJourneyObj) => {
      const journeyObj = {
        destination: rawJourneyObj.legs[0].end_address,
        arrivalTimeText: rawJourneyObj.legs[0].arrival_time.text,
        departureTimeUTC: rawJourneyObj.legs[0].departure_time.value,
        transitSteps: rawJourneyObj.legs[0].steps.map((step) => {
          const line = step.transit_details ? step.transit_details.line.short_name : 'N/A';
          const vehicle = step.transit_details ? step.transit_details.line.vehicle.name : 'N/A';
          const stepObj = {
            instruction: step.html_instructions,
            mode: step.travel_mode,
            duration: step.duration.text,
            line,
            vehicle,
          };
          return stepObj;
        }),
      };
      Object.keys(journeyObj.transitSteps).forEach((transitStep) => {
        if (journeyObj.transitSteps[transitStep]) {
          Object.keys(alerts).forEach((alert) => {
            if (alerts[alert].affectedLines) {
              journeyObj.alerts = [];
              alerts[alert].affectedLines.forEach((line) => {
                journeyObj.transitSteps[transitStep].line == line ? journeyObj.alerts.push(alert.description) : null;
              });
              !journeyObj.alerts[0] ? journeyObj.alerts[0] = 'on-time' : null;
            }
          });
        }
      });
      return journeyObj;
    });
    return dispatch(addJourneys(destinationId, journeys));
  };
}
