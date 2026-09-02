import { useDispatch } from 'react-redux';
import { setFilter, resetFilters } from '/src/features/cars/carSlice';
import { useRef } from 'react';

const FilterBar = () => {
  const dispatch = useDispatch();
  const inputs = useRef({});

  const handleChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    Object.keys(inputs.current).forEach((key) => {
      if (inputs.current[key]) {
        inputs.current[key].value = '';
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Виробник
          </label>
          <input
            ref={(el) => (inputs.current.manufacturer = el)}
            name="manufacturer"
            placeholder="Toyota"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Рік
          </label>
          <input
            ref={(el) => (inputs.current.year = el)}
            name="year"
            placeholder="2020"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Колір
          </label>
          <input
            ref={(el) => (inputs.current.color = el)}
            name="color"
            placeholder="Червоний"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Об'єм
          </label>
          <input
            ref={(el) => (inputs.current.volume = el)}
            name="volume"
            placeholder="2.0"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Ціна від
          </label>
          <input
            ref={(el) => (inputs.current.minPrice = el)}
            name="minPrice"
            placeholder="1000"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Ціна до
          </label>
          <input
            ref={(el) => (inputs.current.maxPrice = el)}
            name="maxPrice"
            placeholder="10000"
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleReset}
          className="text-sm font-medium text-gray-600 hover:text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          Скинути фільтри
        </button>
      </div>
    </div>
  );
};

export default FilterBar;