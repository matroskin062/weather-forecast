import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: white;
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

export const Date = styled.p`
  color: white;
  font-size: 24px;
`;
