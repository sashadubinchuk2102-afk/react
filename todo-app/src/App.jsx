import { Provider } from 'react-redux';
import { store } from '/src/app/store';
import CarList from '/src/Features/cars/CarList';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
          🚗 Автомобільний каталог
        </header>
        <CarList/>
      </div>
    </Provider>
  );
}
export default App;
