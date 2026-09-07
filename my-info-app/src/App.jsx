import './App.css';
import CityInfo from './components/CityInfo';
import MovieInfo from './components/MovieInfo';
import PetInfo from './components/PetInfo';
import BandInfo from './components/BandInfo';

function App() {
  const city = {
    name: 'Острог',
    country: 'Україна',
    founded: 1794,
    landmarks: [
      {
        name: 'ОСТРОГ',
        image: '/src/assets/56-109-0001_Ostroh_castle_RB_24.jpg',
      },
      {
        name: 'Острозька академія',
        image: '/src/assets/academy.jpg',
      },
    ],
  };

  const movie = {
    title: 'Володар перснів: Братерство персня',
    director: 'Пітер Джексон',
    year: 2001,
    studio: 'New Line Cinema',
    poster: '/src/assets/images.jpg',
  };

  const pet = {
    name: 'Мурчик',
    type: 'Кіт',
    breed: 'Британський короткошерстий',
    age: 3,
    color: 'Сірий з білими лапками',
    photo: '/src/assets/cat.jpg',
    hobby: 'Линяє',
  };

  const band = {
    name: 'Rammstein',
    members: ['Till Lindemann', 'Richard Z. Kruspe', 'Paul Landers', 'Oliver Riedel', 'Christoph Schneider', 'Flake Lorenz'],
    albums: [
      {
        name: 'Mutter',
        year: 2001,
        cover: '/src/assets/Mutter.jpg',
      },
      {
        name: 'Reise, Reise',
        year: 2004,
        cover: '/src/assets/Reise.jpg',
      },
      {
        name: 'Rosenrot',
        year: 2005,
        cover: '/src/assets/Rosenrot.jpg',
      },
    ],
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Мій React-додаток</h1>

      <CityInfo city={city} />
      <MovieInfo movie={movie} />
      <PetInfo pet={pet} />
      <BandInfo band={band} />
    </div>
  );
}

export default App;