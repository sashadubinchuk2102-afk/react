import './App.css';

function App() {
  // ========== ДАНІ ДЛЯ МІСТА ==========
  const city = {
    name: 'Острог',
    country: 'Україна',
    founded: 1100,
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
    hobby: 'Линяє.',
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
        cover: '/src/assets/reise.jpg',
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

      {/* ========== ЗАВДАННЯ 1: МІСТО ========== */}
      <section className="card">
        <h2>🏙️ Моє місто</h2>
        <p><strong>Назва:</strong> {city.name}</p>
        <p><strong>Країна:</strong> {city.country}</p>
        <p><strong>Рік заснування:</strong> {city.founded}</p>
        <div className="image-grid">
          {city.landmarks.map((item, index) => (
            <div key={index} className="image-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ЗАВДАННЯ 2: ФІЛЬМ ========== */}
      <section className="card">
        <h2>🎬 Улюблений фільм</h2>
        <div className="movie-card">
          <img className="movie-poster" src={movie.poster} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p><strong>Режисер:</strong> {movie.director}</p>
            <p><strong>Рік:</strong> {movie.year}</p>
            <p><strong>Кіностудія:</strong> {movie.studio}</p>
          </div>
        </div>
      </section>

      {/* ========== ЗАВДАННЯ 3: УЛЮБЛЕНЕЦЬ ========== */}
      <section className="card">
        <h2>🐾 Мій домашній улюбленець</h2>
        <div className="pet-card">
          <img className="pet-photo" src={pet.photo} alt={pet.name} />
          <div className="pet-info">
            <h3>{pet.name}</h3>
            <p><strong>Тип:</strong> {pet.type}</p>
            <p><strong>Порода:</strong> {pet.breed}</p>
            <p><strong>Вік:</strong> {pet.age} роки</p>
            <p><strong>Колір:</strong> {pet.color}</p>
            <p><strong>Хобі:</strong> {pet.hobby}</p>
          </div>
        </div>
      </section>

      {/* ========== ЗАВДАННЯ 4: МУЗИЧНИЙ ГУРТ ========== */}
      <section className="card">
        <h2>🎸 Улюблений музичний гурт</h2>
        <h3>{band.name}</h3>
        <p><strong>Учасники:</strong> {band.members.join(', ')}</p>
        <h4>Альбоми:</h4>
        <div className="album-grid">
          {band.albums.map((album, index) => (
            <div key={index} className="album-item">
              <img src={album.cover} alt={album.name} />
              <p>{album.name} ({album.year})</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;