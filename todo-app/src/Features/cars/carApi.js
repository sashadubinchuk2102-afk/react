import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['Car'],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => {
        // Видаляємо порожні параметри
        const filteredParams = Object.fromEntries(
          Object.entries(params || {}).filter(([_, value]) => value !== '' && value !== undefined)
        );
        return {
          url: 'cars',
          params: filteredParams,
        };
      },
      providesTags: ['Car'],
    }),
    addCar: builder.mutation({
      query: (newCar) => ({
        url: 'cars',
        method: 'POST',
        body: newCar,
      }),
      invalidatesTags: ['Car'],
    }),
    updateCar: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `cars/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Car', id }],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `cars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Car'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;