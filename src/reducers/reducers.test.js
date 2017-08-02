import reducer from '.';
import * as types from '../constants/constants';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = {
      configuration: {
        currentLocation: {},
      },
      destinations: {
        ids: [],
        byId: {},
      },
      journeys: {
        byDestinationId: {},
      },
    };

    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle action type UPDATE_CURRENT_LOCATION', () => {
    let oldState = {
      configuration: {
        currentLocation: {},
      },
      destinations: {
        ids: [],
        byId: {},
      },
      journeys: {
        byDestinationId: {},
      },
    };

    let action = {
      type: types.UPDATE_CURRENT_LOCATION,
      currentLocation: {
        name: 'Galvanize',
        address: '44 Tehama St, San Francisco, CA 94105',
      },
    };

    let newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [],
        byId: {},
      },
      journeys: {
        byDestinationId: {},
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);

    oldState = newState;

    action = {
      type: types.UPDATE_CURRENT_LOCATION,
      currentLocation: {
        name: 'Galvanize!',
        address: '543 Howard St, San Francisco, CA 94105',
      },
    };

    newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize!',
          address: '543 Howard St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [],
        byId: {},
      },
      journeys: {
        byDestinationId: {},
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type ADD_DESTINATION', () => {
    let oldState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [],
        byId: {},
      },
      journeys: {
        byDestinationId: {},
      },
    };

    let action = {
      type: types.ADD_DESTINATION,
      destination: {
        id: 5,
        name: 'SFO',
        address: 'SFO, San Francisco, CA 94128',
      },
    };

    let newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [5],
        byId: {
          5: {
            id: 5,
            name: 'SFO',
            address: 'SFO, San Francisco, CA 94128',
          },
        },
      },
      journeys: {
        byDestinationId: {},
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);

    oldState = newState;

    action = {
      type: types.ADD_DESTINATION,
      destination: {
        id: 6,
        name: 'OAK',
        address: 'OAK, Oakland, CA 94234',
      },
    };

    newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            name: 'SFO',
            address: 'SFO, San Francisco, CA 94128',
          },
          6: {
            id: 6,
            name: 'OAK',
            address: 'OAK, Oakland, CA 94234',
          },
        },
      },
      journeys: {
        byDestinationId: {},
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type ADD_JOURNEY', () => {
    let oldState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            name: 'SFO',
            address: 'SFO, San Francisco, CA 94128',
          },
          6: {
            id: 6,
            name: 'OAK',
            address: 'OAK, Oakland, CA 94234',
          },
        },
      },
      journeys: {
        byDestinationId: {},
      },
    };

    let action = {
      type: types.ADD_JOURNEY,
      destinationId: 5,
      journey: { departureTime: '11:50pm', arrivalTime: '12:30am' },
    };

    let newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            name: 'SFO',
            address: 'SFO, San Francisco, CA 94128',
          },
          6: {
            id: 6,
            name: 'OAK',
            address: 'OAK, Oakland, CA 94234',
          },
        },
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }],
        },
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);

    oldState = newState;

    action = {
      type: types.ADD_JOURNEY,
      destinationId: 5,
      journey: { departureTime: '11:55pm', arrivalTime: '12:45am' },
    };

    newState = {
      configuration: {
        currentLocation: {
          name: 'Galvanize',
          address: '44 Tehama St, San Francisco, CA 94105',
        },
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            name: 'SFO',
            address: 'SFO, San Francisco, CA 94128',
          },
          6: {
            id: 6,
            name: 'OAK',
            address: 'OAK, Oakland, CA 94234',
          },
        },
      },
      journeys: {
        byDestinationId: {
          5: [
            { departureTime: '11:50pm', arrivalTime: '12:30am' },
            { departureTime: '11:55pm', arrivalTime: '12:45am' },
          ],
        },
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });
});
