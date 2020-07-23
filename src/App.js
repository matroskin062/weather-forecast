import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from './redux/actions/weather';
import Weather from './components/Weather/Weather';
import SearchCity from './components/SearchCity/SearchCity';
import { fetchForecast } from './redux/actions/forecast';
import Forecast from './components/Forecast/Forecast';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(({ weather }) => weather.data);
  const forecastData = useSelector(({ forecast }) => forecast.data);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const params = {
        lat: coords.latitude,
        lon: coords.longitude,
      };
      dispatch(fetchWeatherData(params));
      dispatch(fetchForecast(params));
    });
  }, [dispatch]);

  return (
    <div className='weather-app'>
      <SearchCity />
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
