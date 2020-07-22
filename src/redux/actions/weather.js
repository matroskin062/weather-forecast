import { axios } from '../../axios';

const setWeatherData = (payload) => ({
  type: 'SET_WEATHER_DATA',
  payload,
});

export const fetchWeatherData = (params) => (dispatch) => {
  axios.get('/weather', { params }).then((res) => {
    dispatch(setWeatherData(res.data));
  });
};

export const fetchWeatherDataForCity = (city) => (dispatch) => {
  const params = { q: city };
  axios.get('/weather', { params }).then((res) => {
    dispatch(setWeatherData(res.data));
  });
};
