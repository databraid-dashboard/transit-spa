import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as TYPES from '../constants/constants';
import * as actions from './index';

describe('actions', function () {
  it('should create an action to update current location', function () {
    var location = {
      address: '44 Tehama St, San Francisco, CA 94105'
    };

    var expectedAction = {
      type: TYPES.UPDATE_CURRENT_LOCATION,
      currentLocation: {
        address: '44 Tehama St, San Francisco, CA 94105'
      }
    };

    expect(actions.updateCurrentLocation(location)).toEqual(expectedAction);
  });

  it('should create an action to add a destination', function () {
    var destination = 'SFO, San Francisco, CA 94128';

    var expectedAction = {
      type: TYPES.ADD_DESTINATION,
      destination: 'SFO, San Francisco, CA 94128'
    };

    expect(actions.addDestination(destination)).toEqual(expectedAction);
  });

  it('should create an action to add journeys for a destination', function () {
    var destinationId = 5;
    var journeys = [{ departureTime: '07:50am', arrivalTime: '08:30am' }, { departureTime: '08:00am', arrivalTime: '08:40am' }, { departureTime: '08:10am', arrivalTime: '08:50am' }];

    var expectedAction = {
      type: TYPES.ADD_JOURNEYS,
      destinationId: 5,
      journeys: [{ departureTime: '07:50am', arrivalTime: '08:30am' }, { departureTime: '08:00am', arrivalTime: '08:40am' }, { departureTime: '08:10am', arrivalTime: '08:50am' }]
    };

    expect(actions.addJourneys(destinationId, journeys)).toEqual(expectedAction);
  });

  it('should create an action to remove all journeys for a destination', function () {
    var destinationId = 5;

    var expectedAction = {
      type: TYPES.REMOVE_JOURNEYS,
      destinationId: 5
    };

    expect(actions.removeJourneys(destinationId)).toEqual(expectedAction);
  });

  it('should create an action to remove a destination', function () {
    var destinationId = 5;

    var expectedAction = {
      type: TYPES.REMOVE_DESTINATION,
      destinationId: 5
    };

    expect(actions.removeDestination(destinationId)).toEqual(expectedAction);
  });

  it('should fetch journeys from API', function () {
    var mockApiFetchJourneys = jest.fn();
    mockApiFetchJourneys.mockReturnValue(Promise.resolve([{
      legs: [{
        end_address: '123 Main st',
        arrival_time: { text: '11:41am' },
        departure_time: { value: 1501871210 },
        steps: [{
          html_instructions: 'Walk to Montgomery St. Station',
          travel_mode: 'WALKING',
          duration: { text: '8 mins' }
        }]
      }]
    }]));

    var extraArgument = {
      Api: {
        fetchJourneys: mockApiFetchJourneys
      }
    };

    var initialState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          }
        }
      },
      journeys: {
        byDestinationId: {}
      }
    };

    var expectedActions = [{
      type: TYPES.ADD_JOURNEYS,
      destinationId: 5,
      journeys: [{
        destination: '123 Main st',
        arrivalTimeText: '11:41am',
        departureTimeUTC: 1501871210,
        transitSteps: [{
          instruction: 'Walk to Montgomery St. Station',
          mode: 'WALKING',
          duration: '8 mins'
        }]
      }]
    }];

    var mockStore = configureStore([thunk.withExtraArgument(extraArgument)]);
    var store = mockStore(initialState);

    return store.dispatch(actions.fetchJourneys(5, 'home', 'work', '07:15am')).then(function () {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});