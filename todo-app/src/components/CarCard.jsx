import { useDeleteCarMutation } from '/src/features/cars/carApi';

const CarCard = ({ car, onEdit }) => {
  const [deleteCar] = useDeleteCarMutation();

  const handleDelete = async () => {
    if (window.confirm(`Видалити ${car.name}?`)) {
      await deleteCar(car.id);
    }
  };

  // Кольори для різних виробників (для бейджа)
  const getManufacturerColor = (manufacturer) => {
    const colors = {
      toyota: 'bg-blue-100 text-blue-800',
      bmw: 'bg-gray-200 text-gray-800',
      ford: 'bg-red-100 text-red-800',
      honda: 'bg-green-100 text-green-800',
      mercedes: 'bg-purple-100 text-purple-800',
      audi: 'bg-cyan-100 text-cyan-800',
    };
    return colors[manufacturer?.toLowerCase()] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
      {/* Верхня частина з кольоровою смугою */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 truncate">{car.name}</h3>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getManufacturerColor(car.manufacturer)}`}>
            {car.year}
          </span>
        </div>
        
        <div className="space-y-1.5 text-sm">
          <p className="text-gray-600 flex items-center gap-2">
            <span className="w-5 text-gray-400">🏭</span> {car.manufacturer}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="w-5 text-gray-400">⚡</span> {car.volume} л
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="w-5 text-gray-400">🎨</span> {car.color}
          </p>
          <p className="text-xl font-bold text-green-600 mt-2">
            {car.price} $
          </p>
        </div>
        
        {car.description && (
          <p className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100 line-clamp-2">
            {car.description}
          </p>
        )}
        
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onEdit(car)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-xl text-sm font-medium transition"
          >
            Редагувати
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-xl text-sm font-medium transition"
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;