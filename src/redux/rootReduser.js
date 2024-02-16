import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import moviesReducer from './movies/movies-slice';
// import filterReducer from './filter/filter-slice';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  //   movies: moviesReducer,
  //   filter: filterReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
