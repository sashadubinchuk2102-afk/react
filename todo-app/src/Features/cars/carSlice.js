import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    manufacturer: '',
    year: '',
    color: '',
    volume: '',
    minPrice: '',
    maxPrice: '',
  },
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {
        manufacturer: '',
        year: '',
        color: '',
        volume: '',
        minPrice: '',
        maxPrice: '',
      };
    },
  },
});

export const { setFilter, resetFilters } = carSlice.actions;
export default carSlice.reducer;