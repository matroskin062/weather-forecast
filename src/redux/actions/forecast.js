import { axios } from '../../axios';
const setForecast = (forecast) => ({ type: 'SET_FORECAST', payload: forecast });

export const fetchForecast = (params) => (dispatch) => {
  axios.get('/forecast', { params }).then((res) => {
    dispatch(setForecast(res.data.list));
  });
};

export const fetchForecastForCity = (city) => (dispatch) => {
  const params = {q: city}
  axios.get('/forecast', { params }).then((res) => {
    dispatch(setForecast(res.data.list));
  });
};
