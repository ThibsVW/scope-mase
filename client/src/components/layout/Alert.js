import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // connecting any action to redux

const Alert = ({ alerts }) =>
  alerts !== null && //if not equal to null
  alerts.length > 0 && // greater than 0
  alerts.map((
    alert //loop through
  ) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div> //output message and alert type (css)
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
