import reducer from '.';
import * as TYPES from '../constants/constants';

describe('root reducer', function () {
  it('should return the initial state', function () {
    var expectedInitialState = {
      configuration: {
        currentLocation: { address: '44 Tehama St, San Francisco, CA 94105' }
      },
      destinations: {
        ids: [],
        byId: {}
      },
      journeys: {
        byDestinationId: {}
      }
    };

    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle action type UPDATE_CURRENT_LOCATION', function () {
    var oldState = {
      configuration: {
        currentLocation: { address: '44 Tehama St, San Francisco, CA 94105' }
      },
      destinations: {
        ids: [],
        byId: {}
      },
      journeys: {
        byDestinationId: {}
      }
    };

    var action = {
      type: TYPES.UPDATE_CURRENT_LOCATION,
      currentLocation: {
        address: '543 Howard St, San Francisco, CA 94105'
      }
    };

    var newState = {
      configuration: {
        currentLocation: {
          address: '543 Howard St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [],
        byId: {}
      },
      journeys: {
        byDestinationId: {}
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type ADD_DESTINATION', function () {
    var oldState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [],
        byId: {}
      },
      journeys: {
        byDestinationId: {}
      }
    };

    var action = {
      type: TYPES.ADD_DESTINATION,
      destination: 'SFO, San Francisco, CA 94128'
    };

    var newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [1],
        byId: {
          1: {
            id: 1,
            address: 'SFO, San Francisco, CA 94128'
          }
        }
      },
      journeys: {
        byDestinationId: {}
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);

    oldState = newState;

    action = {
      type: TYPES.ADD_DESTINATION,
      destination: 'OAK, Oakland, CA 94234'
    };

    newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [1, 2],
        byId: {
          1: {
            id: 1,
            address: 'SFO, San Francisco, CA 94128'
          },
          2: {
            id: 2,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {}
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type ADD_JOURNEYS', function () {
    var oldState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {}
      }
    };

    var action = {
      type: TYPES.ADD_JOURNEYS,
      destinationId: 5,
      journeys: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }]
    };

    var newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }]
        }
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);

    oldState = newState;

    action = {
      type: TYPES.ADD_JOURNEYS,
      destinationId: 5,
      journeys: [{ departureTime: '11:55pm', arrivalTime: '12:45am' }, { departureTime: '11:58pm', arrivalTime: '12:48am' }]
    };

    newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }, { departureTime: '11:58pm', arrivalTime: '12:48am' }]
        }
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type REMOVE_JOURNEYS', function () {
    var oldState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }],
          6: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }]
        }
      }
    };

    var action = {
      type: TYPES.REMOVE_JOURNEYS,
      destinationId: 5
    };

    var newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [],
          6: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }]
        }
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle action type REMOVE_DESTINATION', function () {
    var oldState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [5, 6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }],
          6: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }]
        }
      }
    };

    var action = {
      type: TYPES.REMOVE_DESTINATION,
      destinationId: 5
    };

    var newState = {
      configuration: {
        currentLocation: {
          address: '44 Tehama St, San Francisco, CA 94105'
        }
      },
      destinations: {
        ids: [6],
        byId: {
          5: {
            id: 5,
            address: 'SFO, San Francisco, CA 94128'
          },
          6: {
            id: 6,
            address: 'OAK, Oakland, CA 94234'
          }
        }
      },
      journeys: {
        byDestinationId: {
          5: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }],
          6: [{ departureTime: '11:50pm', arrivalTime: '12:30am' }, { departureTime: '11:55pm', arrivalTime: '12:45am' }]
        }
      }
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });
});