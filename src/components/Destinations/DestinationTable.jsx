import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DestinationRow from './DestinationRow';
import injectWidgetId from '../../utils/utils';

export const DestinationTable = ({ destinationIds, destinationsById }) => {
  if (!destinationIds) return <div>Loading...</div>;

  return (
    <div>
      {destinationIds.map(id => (
        <DestinationRow
          key={id}
          id={id}
          name={destinationsById[id].address}
          style={{ margin: '1rem 0rem' }}
          className="destination-row"
        />
      ))}
    </div>
  );
};

DestinationTable.propTypes = {
  destinationIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  destinationsById: PropTypes.shape({
    1: PropTypes.object,
  }).isRequired,
};

DestinationTable.defaultProps = {
  destinationIds: [1],
  destinationsById: { 1: {} },
};

// TODO: TEST MAPSTATETOPROPS AND MAPDISPATCHTOPROPS

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const destinationIds = state.widgets.byId[id].destinations.ids;
  const destinationsById = state.widgets.byId[id].destinations.byId;

  return {
    destinationIds,
    destinationsById,
  };
};

export default injectWidgetId(connect(mapStateToProps, null)(DestinationTable));
