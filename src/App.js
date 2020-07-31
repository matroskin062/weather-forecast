import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from './redux/actions/weather';
import { fetchForecast } from './redux/actions/forecast';

const Weather = React.lazy(() => import('./components/Weather/Weather'));
const SearchCity = React.lazy(() =>
  import('./components/SearchCity/SearchCity')
);
const Forecast = React.lazy(() => import('./components/Forecast/Forecast'));
const Header = React.lazy(() => import('./components/Header/Header'));

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(({ weather }) => weather.data);
  const forecastData = useSelector(({ forecast }) => forecast.data);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const locationSuccess = ({ coords }) => {
      const params = {
        lat: coords.latitude,
        lon: coords.longitude,
      };
      dispatch(fetchWeatherData(params));
      dispatch(fetchForecast(params));
    };
    navigator.geolocation.getCurrentPosition(
      locationSuccess,
      () => setError(true),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className='weather-app'>
      <React.Suspense fallback=''>
        <Header />
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
      </React.Suspense>
    </div>
  );
}

export default App;
