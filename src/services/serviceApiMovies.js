import axios from 'axios';
import authInstance from './serviceApiAuth';
const API_KEY = '6de1479941bef67a0c224787b78603f1';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getAllMovies = async () => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    options
  );

  return await response.json().results;
};

// export const getWatchedMoviesByUser = async key => {
//   const { data } = await authInstance.get('/library/watched');
//   // console.log(data);
//   return data;
// };

// export const getQueueMoviesByUser = async key => {
//   const { data } = await authInstance.get('/library/queue');
//   // console.log(data);
//   return data;
// };

// const contactsInstance = axios.create({
//   baseURL: 'https://63fdea50cd13ced3d7c21a98.mockapi.io/contacts',
// });

export const getAllMoviesByUserCollection = async key => {
  const { data } = await authInstance.get(`/library/${key}`);
  // console.log(data);
  return data;
};

export const addMovie = async (data, key) => {
  const { data: result } = await authInstance.post(`/library/${key}`, data);
  return result;
};

export const deleteMovie = async (id, key) => {
  const { data } = await authInstance.delete(`library/${key}/${id}`);
  // console.log(data);
  return data;
};

// _____________________ async fetch CLASS _____________________________

export default class fetchApiMovies {
  constructor() {
    this.page = 1;
    this.word = '';
    this._movieId = null;
  }

  async fetchMovies() {
    const response = await instance.get(
      `/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
    );
    return response.data.results;
  }

  async fetchMovieDetailsById(MovieId) {
    const response = await instance.get(`movie/${MovieId}?api_key=${API_KEY}`);

    return response.data;
  }

  async fetchMoviesByQuery(query, page) {
    const response = await instance.get(
      `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return response.data.results;
  }

  async fetchMoviesByPage(page) {
    const response = await instance.get(
      `/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    return response.data.results;
  }

  async fetchGenresListByIds() {
    const response = await instance.get(
      `/genre/movie/list?api_key=${API_KEY}&language=en`
    );
    return response.data.genres;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetQuery() {
    this.word = '';
  }

  get query() {
    return this.word;
  }

  set query(newQuery) {
    return (this.word = newQuery);
  }

  get movieId() {
    return this._movieId;
  }

  set movieId(newMovieId) {
    return (this._movieId = newMovieId);
  }
}

// _____________________fetch func_____________________________________
export async function fetchMovies() {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    options
  );

  const res = await response.json();

  const movies = await res.results;

  return movies;
}

export async function fetchMoviesByQuery(query) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  const res = await response.json();

  const movies = await res.results;

  return movies;
}

export async function fetchMovieDetailsById(movieId) {
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    options
  );

  const res = await response.json();

  return res;
}

export async function fetchMoviesByPage(page) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
    options
  );

  const res = await response.json();

  return res;
}

export async function fetchGenresListByIds() {
  const response = await instance.get(
    `/genre/movie/list?api_key=${API_KEY}&language=en`
  );
  return response.data.genres;
}
