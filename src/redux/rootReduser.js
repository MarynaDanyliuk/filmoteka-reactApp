import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import filterReducer from './filter/filter-slice';
import authReducer from './auth/authSlice';
import moviesReducer from './movies/moviesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  //   filter: filterReducer,
  auth: persistedAuthReducer,
  movies: moviesReducer,
});

export default rootReducer;
