import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCarsQuery } from './carApi';
import CarCard from '../../components/CarCard';
import FilterBar from '../../components/FilterBar';
import CarForm from '../../components/CarForm';

const CarList = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  const filters = useSelector((state) => state.cars.filters);
  const { data: cars, isLoading, error, refetch } = useGetCarsQuery(filters);

  const handleEdit = (car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCar(null);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Завантаження...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-xl">
        <p className="text-red-600">⚠️ Помилка завантаження. Переконайтеся, що сервер запущено.</p>
        <button
          onClick={() => refetch()}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🔄 Спробувати знову
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            🚗 Автомобільний каталог
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {cars?.length || 0} автомобілів у каталозі
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <span className="text-xl leading-none">+</span> Додати автомобіль
        </button>
      </div>

      {/* Фільтри */}
      <FilterBar />

      {/* Список автомобілів */}
      {cars?.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">🚫 Немає автомобілів</p>
          <p className="text-gray-400 text-sm mt-1">
            {filters.manufacturer || filters.year || filters.color || filters.volume || filters.minPrice || filters.maxPrice
              ? 'Спробуйте змінити фільтри'
              : 'Додайте перший автомобіль за допомогою кнопки вище'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
          {cars?.map((car) => (
            <CarCard key={car.id} car={car} onEdit={handleEdit} />
          ))}
        </div>
      )}

      {showForm && (
        <CarForm car={editingCar} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default CarList;