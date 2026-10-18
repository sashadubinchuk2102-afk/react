import './App.css';
import Clock from './components/clock/Clock';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Годинник</h1>

      <section className="demo-section">
        <h2>Завдання 1: Базовий годинник</h2>
        <Clock />
      </section>

      <section className="demo-section">
        <h2>Завдання 2: Кастомні кольори</h2>
        <Clock
          morningColor="#FFB6C1"
          dayColor="#98FB98"
          eveningColor="#4B0082"
        />
      </section>

      <section className="demo-section">
        <h2>Завдання 3: Без дати</h2>
        <Clock showDate={false} />
      </section>

      <section className="demo-section">
        <h2>Завдання 4: Кастомні шрифти</h2>
        <Clock
          fontFamily="'Courier New', monospace"
          fontSize="64px"
          fontColor="#FFD700"
          showDate={true}
        />
      </section>
    </div>
  );
}

export default App;