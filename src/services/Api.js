import axios from 'axios';
// import { forceLogout, setTokens } from 'redux/auth/authSlice';
// import { selectAuth } from 'redux/auth/authSelectors';

let store = null;
export const setStore = aStore => {
  store = aStore;
};

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
