import axios from 'axios';
const API_KEY = '6de1479941bef67a0c224787b78603f1';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

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
