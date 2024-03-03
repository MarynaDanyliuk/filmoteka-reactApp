import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://filmoteka-reactapp-backend.vercel.app/',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await authInstance.post('/api/users/signup', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export const login = async data => {
  const { data: result } = await authInstance.post('/login', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.get('/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await authInstance.post('/logout');
  setToken();
  return data;
};

export default authInstance;

// _________________________________________________

// const authInstance = axios.create({
//   baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
// });
