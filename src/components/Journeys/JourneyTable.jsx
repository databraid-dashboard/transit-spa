import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react';

import JourneyRow from './JourneyRow';

import { fetchJourneys } from '../../actions';
import { timeToLeaveConverter } from '../../utils/journeyTableHelpers';
import injectWidgetId from '../../utils/utils';

export class JourneyTable extends Component {
  constructor(props) {
    super(props);

    this.refreshJourneys = this.refreshJourneys.bind(this);
  }

  componentDidMount() {
    const { destinationId, origin, destinationsById } = this.props;
    this.props.fetchJourneys(destinationId, origin, destinationsById[destinationId].address);
  }

  // TODO: TEST refreshJourneys
  refreshJourneys() {
    const { destinationId, origin, destinationsById } = this.props;
    this.props.fetchJourneys(destinationId, origin, destinationsById[destinationId].address);
  }

  render() {
    const { journeys } = this.props;

    if (!journeys || journeys.length === 0) {
      return <Loader active inline="centered" />;
    }

    const bestJourney = journeys[0];
    const nextBestJourney = journeys[1];
    const bestJourneyStatus = bestJourney.alerts ? bestJourney.alerts[0] : 'on-time';
    const nextBestJourneyStatus = nextBestJourney.alerts ? nextBestJourney.alerts[0] : 'on-time';

    const timeToLeaveBest = timeToLeaveConverter(bestJourney.departureTimeUTC);
    const timeToLeaveNextBest = timeToLeaveConverter(nextBestJourney.departureTimeUTC);

    return (
      <div className="journey-table">
        <JourneyRow
          timeToLeaveInSeconds={timeToLeaveBest}
          steps={bestJourney.transitSteps}
          eta={bestJourney.arrivalTimeText}
          conditionStatus={bestJourneyStatus}
          refreshJourneys={this.refreshJourneys}
        />
        <JourneyRow
          timeToLeaveInSeconds={timeToLeaveNextBest}
          steps={nextBestJourney.transitSteps}
          eta={nextBestJourney.arrivalTimeText}
          conditionStatus={nextBestJourneyStatus}
          refreshJourneys={this.refreshJourneys}
        />
      </div>
    );
  }
}

/* eslint-disable react/require-default-props */
JourneyTable.propTypes = {
  destinationId: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  destinationsById: PropTypes.shape({
    1: PropTypes.object,
  }).isRequired,
  fetchJourneys: PropTypes.func.isRequired,
  journeys: PropTypes.arrayOf(PropTypes.object),
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const origin = state.widgets.byId[id].configuration.currentLocation.address;
  const destinationsById = state.widgets.byId[id].destinations.byId;
  const destinationId = ownProps.id;
  const alerts = state.alerts;
  const journeys = state.widgets.byId[id].journeys.byDestinationId[destinationId];

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
    },
    dispatch,
  );

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(JourneyTable));
