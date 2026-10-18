import PropTypes from 'prop-types';

const CounterButton = ({ value, label, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button className="counter-btn" onClick={handleClick}>
      {label}
    </button>
  );
};

CounterButton.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CounterButton;