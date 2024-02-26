import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllMovies,
  fetchAddMovie,
  fetchDeleteMovie,
} from './moviesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllMovies.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllMovies.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddMovie.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddMovie.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddMovie.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteMovie.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteMovie.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteMovie.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

console.log(moviesSlice);

export const { addMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
