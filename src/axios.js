import * as Axios from 'axios';

const API_KEY = '166f41f09442b35e807cb8bce5b3cfe6';
export const axios = Axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
});

axios.interceptors.request.use((config) => {
  config.params = {
    appid: API_KEY,
    units: 'metric',
    lang: 'ru',
    ...config.params,
  };
  return config;
});
