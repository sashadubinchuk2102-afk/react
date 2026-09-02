import { configureStore } from '@reduxjs/toolkit';
import { carApi } from '/src/features/cars/carApi';
import carReducer from '/src/features/cars/carSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});