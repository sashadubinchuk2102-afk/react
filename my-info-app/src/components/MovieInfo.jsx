const MovieInfo = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>🎬 Улюблений фільм</h2>
      <div className="movie-content">
        <img className="movie-poster" src={movie.poster} alt={movie.title} />
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p><strong>Режисер:</strong> {movie.director}</p>
          <p><strong>Рік:</strong> {movie.year}</p>
          <p><strong>Кіностудія:</strong> {movie.studio}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;