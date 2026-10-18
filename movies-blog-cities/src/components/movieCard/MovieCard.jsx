import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-sessions">
        <strong>Сеанси:</strong>
        {movie.sessions.map((time, index) => (
          <span key={index} className="session-badge">
            {time}
          </span>
        ))}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieCard;