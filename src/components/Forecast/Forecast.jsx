import React from 'react';
import styled from 'styled-components';
import { dateFormatter, timeFormatter } from '../../utils/timeFormatter';

const StyledForecast = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  display: flex;
  overflow-x: auto;

  @media (min-width: 769px) {
    ::-webkit-scrollbar {
      margin-top: 2px;
      height: 15px;
      width: 5px;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: white;
      border-radius: 10px;
    }
  }
`;
const ForecastCard = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: black;
    font-weight: bold;
  }
`;

const Forecast = ({ forecastData }) => {
  const forecast = forecastData.map(({ dt, main, weather }) => {
    weather = weather[0];
    return (
      <ForecastCard key={dt + main.temp}>
        <div>
          <p>{dateFormatter(dt)}</p>
          <p>{timeFormatter(dt)}</p>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt='weather-icon'
          />
          <p>{weather.description}</p>
        </div>
        <p>{Math.round(main.temp)}&deg;C</p>
      </ForecastCard>
    );
  });
  return (
    <StyledForecast>
      <div style={{ padding: '5px' }}></div>
      {forecast}
      <div style={{ padding: '5px' }}></div>
    </StyledForecast>
  );
};

export default Forecast;
