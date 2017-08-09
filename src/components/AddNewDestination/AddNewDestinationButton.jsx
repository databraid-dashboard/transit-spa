import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const AddNewDestinationButton = ({ onClick }) =>
  (<div id="button-div">
    <Button
      className="transit-button"
      circular
      icon="plus"
      size="huge"
      color="blue"
      onClick={onClick}
    />
  </div>);

AddNewDestinationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

AddNewDestinationButton.defaultProps = {
  onClick: () => {},
};

export default AddNewDestinationButton;
