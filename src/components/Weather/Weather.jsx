import React from 'react';
import { Temperature, StyledWeather, CommonInfo } from './Style';
import { timeFormatter } from '../../utils/timeFormatter';
import { windDirectionToText } from '../../utils/windDirectionToText';
import humiditySvg from '../../assets/humidity.svg';
import windSvg from '../../assets/wind.svg';
import pressureSvg from '../../assets/pressure.svg';
import sunriseSvg from '../../assets/sunrise.svg';
import sunsetSvg from '../../assets/sunset.svg';
import windDirSvg from '../../assets/wind-direction.svg';

const Weather = ({ name, main, weather, wind, dt, sys }) => {
  const { temp, feels_like, humidity, pressure } = main;
  const windDirection = windDirectionToText(wind.deg);
  const sunrise = timeFormatter(sys.sunrise);
  const sunset = timeFormatter(sys.sunset);
  return (
    <StyledWeather>
      <Temperature>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt='weather'
        />
        <div>
          <h1>Температура: {Math.round(temp)}&deg;C</h1>
          <h3>Чувствуется как: {Math.round(feels_like)}&deg;C</h3>
          <h3>{weather[0].description}</h3>
        </div>
      </Temperature>

      <CommonInfo>
        <div>
          <img src={humiditySvg} alt='humidity' width='42' />
          <p>Влажность: {humidity}%</p>
        </div>

        <div>
          <img src={windSvg} alt='wind' width='42' />
          <p>Скорость ветра: {wind.speed} м/с</p>
        </div>

        <div>
          <img src={sunriseSvg} alt='sunrise' width='42' />
          <p>Восход: {sunrise}</p>
        </div>
        <div>
          <img src={pressureSvg} alt='pressure' width='42' />
          <p>Давление: {pressure} мм</p>
        </div>
        <div>
          <img src={windDirSvg} alt='wind-direction' width='42' />
          <p>Направление ветра: {windDirection}</p>
        </div>
        <div>
          <img src={sunsetSvg} alt='sunset' width='42' />
          <p>Закат: {sunset}</p>
        </div>
      </CommonInfo>
    </StyledWeather>
  );
};

export default Weather;
