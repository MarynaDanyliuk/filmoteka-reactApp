import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/serviceApiMovies';
// import * as actions from './contacts-actions';

export const fetchAllMovies = createAsyncThunk(
  'movies/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllMovies();
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

// export const fetchMoviesByQuery = (query = createAsyncThunk(
//   'movies/fetch-all',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getAllMovies(query);
//       console.log(data);
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// ));

export const fetchAddMovie = createAsyncThunk(
  'movies/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addMovies(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteMovie = createAsyncThunk(
  'movies/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteMovie(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// export const fetchMyPets = createAsyncThunk(
//   'myPets/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getMyPets();
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data.message);
//     }
//   }
// );

// export const addMyPet = createAsyncThunk(
//   'myPets/addPet',
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.addMyPet(data);
//       return result;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data.message);
//     }
//   }
// );

// export const deleteMyPet = createAsyncThunk(
//   'myPets/deletePet',
//   async (id, thunkAPI) => {
//     try {
//       await api.removeMyPet(id);
//       return id;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data.message);
//     }
//   }
// );
