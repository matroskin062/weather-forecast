import React, { useState } from 'react';
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
  const [time, setTime] = useState(null);
  React.useEffect(() => {
    clock();
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords);
      const params = {
        lat: coords.latitude,
        lon: coords.longitude,
      };
      dispatch(fetchWeatherData(params));
      dispatch(fetchForecast(params));
    });
  }, [dispatch]);

  const clock = () => {
    setInterval(() => {
      const date = new Date();
      let day = date.getDay();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      if (h < 10) h = '0' + h;
      if (m < 10) m = '0' + m;
      if (s < 10) s = '0' + s;
      if (day === 3) day = 'Среда';
      setTime(
        `${h}:${m}:${s} ${day} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
      );
    }, 1000);
  };

  return (
    <div className='weather-app'>
      <h1>{time}</h1>
      <SearchCity />
      {weatherData && (
        <>
          <h1 style={{ textAlign: 'center' }}>{weatherData.name}</h1>
          <Weather {...weatherData} />
          {forecastData && <Forecast forecastData={forecastData} />}
        </>
      )}
    </div>
  );
}

export default App;
