import styled from 'styled-components';

const StyledWeather = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
`;

const Temperature = styled.div`
  width: 100%;
  display: flex;
  color: black;
  align-items: center;
  margin-right: 15px;
`;
const CommonInfo = styled.div`
  width: 100%;
  color: white;
  background-color: rgba(0.5, 0.5, 0.5, 0.5);
  border-radius: 10px;
  padding: 15px 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* gap: px; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export { StyledWeather, Temperature, CommonInfo };
