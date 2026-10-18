import PropTypes from 'prop-types';

const CounterDisplay = ({ count }) => {
  return (
    <div className="counter-display">
      <span>{count}</span>
    </div>
  );
};

CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CounterDisplay;