import PropTypes from 'prop-types';

const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      <div className="city-header">
        <img className="city-coat" src={city.coatOfArms} alt={`Герб ${city.city}`} />
        <div>
          <h3>{city.city}</h3>
          <p className="city-country">{city.country}</p>
        </div>
      </div>
      <p className="city-description">{city.description}</p>
      <div className="city-stats">
        <p><strong>Населення:</strong> {city.population.toLocaleString()} осіб</p>
        <p><strong>Площа:</strong> {city.area} км²</p>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coatOfArms: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
  }).isRequired,
};

export default CityCard;