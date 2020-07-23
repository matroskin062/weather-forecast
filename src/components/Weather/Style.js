import styled from 'styled-components';

const StyledWeather = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

const Temperature = styled.div`
  flex: 50%;
  display: flex;
  color: black;
  align-items: center;
  margin-right: 15px;
  @media (max-width: 576px) {
    img {
      width: 45%;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 16px;
    }
    h3{
      font-size: 13px
    }
  }
`;
const CommonInfo = styled.div`
  flex: 50%;
  color: white;
  background-color: rgba(0.5, 0.5, 0.5, 0.5);
  border-radius: 10px;
  padding: 15px 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { StyledWeather, Temperature, CommonInfo };
