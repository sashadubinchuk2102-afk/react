import './App.css';
import MovieCard from './components/movieCard/MovieCard';
import BlogCard from './components/blogCard/BlogCard';
import CityCard from './components/cityCard/CityCard';
import movies from './data/moviesData.json';
import blogPosts from './data/blogData.json';
import cities from './data/citiesData.json';

function App() {
  return (
    <div className="app-container">
      <section className="section">
        <h1>🎬 Розклад кінотеатру</h1>
        {movies && movies.length > 0 ? (
          <div className="cards-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <h2>Фільми завантажуються...</h2>
        )}
      </section>

      <section className="section">
        <h1>📝 Записи блогу</h1>
        {blogPosts && blogPosts.length > 0 ? (
          <div className="cards-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <h2>Записи завантажуються...</h2>
        )}
      </section>

      <section className="section">
        <h1>🏙️ Міста країни</h1>
        {cities && cities.length > 0 ? (
          <div className="cards-grid">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        ) : (
          <h2>Міста завантажуються...</h2>
        )}
      </section>
    </div>
  );
}

export default App;