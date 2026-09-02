import { useState, useEffect } from 'react';
import { useAddCarMutation, useUpdateCarMutation } from '/src/features/cars/carApi';

const CarForm = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    year: '',
    volume: '',
    price: '',
    color: '',
    description: '',
  });
  const [error, setError] = useState('');

  const [addCar, { isLoading: isAdding }] = useAddCarMutation();
  const [updateCar, { isLoading: isUpdating }] = useUpdateCarMutation();

  useEffect(() => {
    if (car) {
      setFormData(car);
    }
  }, [car]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (car) {
        await updateCar({ id: car.id, ...formData }).unwrap();
      } else {
        await addCar(formData).unwrap();
      }
      onClose();
    } catch (err) {
      console.error('Помилка:', err);
      setError('Не вдалося зберегти. Перевірте сервер.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {car ? '✏️ Редагувати автомобіль' : '➕ Додати автомобіль'}
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="name"
              placeholder="🚗 Назва"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="manufacturer"
              placeholder="🏭 Виробник"
              value={formData.manufacturer}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="year"
              placeholder="📅 Рік"
              type="number"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="volume"
              placeholder="⚡ Об'єм (л)"
              type="number"
              step="0.1"
              value={formData.volume}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="price"
              placeholder="💰 Ціна ($)"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              name="color"
              placeholder="🎨 Колір"
              value={formData.color}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="📝 Опис"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded mt-3 focus:ring-2 focus:ring-blue-500 outline-none"
            rows="3"
          />
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              disabled={isAdding || isUpdating}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded flex-1 transition disabled:opacity-50"
            >
              {isAdding || isUpdating ? 'Збереження...' : car ? '💾 Оновити' : '✅ Додати'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded flex-1 transition"
            >
              ❌ Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;