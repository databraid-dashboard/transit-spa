import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BestJourney from './BestJourney';
import NextBestJourney from './NextBestJourney';

import { fetchJourneys, fetchAlerts } from '../../actions';

function timeToLeaveConverter(departureTime) {
  const currentTime = Date.now() / 1000;

  return Math.ceil((departureTime - currentTime) / 60);
}


class JourneyTable extends Component {
  componentDidMount() {
    const { destinationId, origin, destinationsById } = this.props;
    this.props.fetchAlerts()
    .then(() => {
      this.props.fetchJourneys(destinationId, origin, destinationsById[destinationId].address);
    });
  }


  render() {
    const { journeys, alerts } = this.props;

    if (!journeys) return <div>Loading...</div>;

    const bestJourney = journeys[0];
    const nextBestJourney = journeys[1];
    console.log(bestJourney)
    const bestJourneyStatus = bestJourney.alerts ?  bestJourney.alerts[0] : 'on-time';
    const nextBestJourneyStatus = nextBestJourney.alerts ? nextBestJourney.alerts[0]: 'on-time';




    return (
      <div>
        <BestJourney
          TimeToLeave={timeToLeaveConverter(bestJourney.departureTimeUTC)}
          steps={bestJourney.transitSteps}
          eta={bestJourney.arrivalTimeText}
          conditionStatus={bestJourneyStatus}
        />
        <NextBestJourney
          timeToLeave={timeToLeaveConverter(nextBestJourney.departureTimeUTC)}
          steps={nextBestJourney.transitSteps}
          eta={nextBestJourney.arrivalTimeText}
          conditionStatus={nextBestJourneyStatus}
        />
      </div>
    );
  }
}

JourneyTable.propTypes = {
  destinationId: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  destinationsById: PropTypes.shape({
    1: PropTypes.object,
  }).isRequired,
  fetchJourneys: PropTypes.func.isRequired,
  journeys: PropTypes.arrayOf(PropTypes.object).isRequired,
  alerts: PropTypes.shape({
    1: PropTypes.object,
  }).isRequired,
  fetchAlerts: PropTypes.func.isRequired,
};

JourneyTable.defaultProps = {
  destinationId: 1,
  origin: '',
  destinationsById: { 1: {} },
  fetchJourneys: () => {},
  journeys: [
    {
      departureTimeUTC: Date.now() / 1000,
      arrivalTimeText: '00:00am',
      transitSteps: [
        { duration: '1 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' },
        {
          duration: '23 mins',
          instruction: 'Metro rail towards Warm Springs/South Fremont',
          mode: 'TRANSIT',
        },
      ],
    },
    {
      departureTimeUTC: Date.now() / 1000,
      arrivalTimeText: '00:00pm',
      transitSteps: [
        { duration: '4 mins', instruction: 'Walk to Some St. Station', mode: 'WALKING' },
        {
          duration: '56 mins',
          instruction: 'Metro rail towards Warm Springs/South Fremont',
          mode: 'TRANSIT',
        },
      ],
    },
  ],
};
export const mapStateToProps = (state, ownProps) => {
  const origin = state.configuration.currentLocation.address;
  const destinationsById = state.destinations.byId;
  const destinationId = ownProps.id;
  const journeys = state.journeys.byDestinationId[destinationId];
  const alerts = state.alerts;

  return {
    origin,
    journeys,
    destinationId,
    destinationsById,
    alerts,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchJourneys,
      fetchAlerts,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(JourneyTable);
