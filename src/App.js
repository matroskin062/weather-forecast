import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from './redux/actions/weather';
import Weather from './components/Weather/Weather';
import SearchCity from './components/SearchCity/SearchCity';
import { fetchForecast } from './redux/actions/forecast';
import Forecast from './components/Forecast/Forecast';
import Axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(({ weather }) => weather.data);
  const forecastData = useSelector(({ forecast }) => forecast.data);
  const [error, setError] = React.useState(false);
  const locationSuccess = ({ coords }) => {
    const params = {
      lat: coords.latitude,
      lon: coords.longitude,
    };
    dispatch(fetchWeatherData(params));
    dispatch(fetchForecast(params));
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      locationSuccess,
      () => setError(true),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className='weather-app'>
      <SearchCity />
      {!weatherData && error ? (
        <h1>Невозомжно определить местоположение: </h1>
      ) : null}
      {weatherData && (
        <>
          <h1 className='title'>{weatherData.name}</h1>
          <Weather {...weatherData} />
          {forecastData && <Forecast forecastData={forecastData} />}
        </>
      )}
    </div>
  );
}

export default App;
