import styled from 'styled-components';

export const SearchInput = styled.input`
  /* font-family: 'Montserrat', sans-serif; */
  border: none;
  width: 50%;
  border-radius: 20px;
  height: 35px;
  padding-top: 2px;
  padding-left: 35px;
  font-size: 18px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: lightgray;
  }
`;

export const Search = styled.div`
  text-align: center;
  padding: 30px 0;
  margin-bottom: 50px;
`;

export const Icon = styled.span`
  position: absolute;
  margin-top: 6px;
  margin-left: 7px;
  color: lightgray;
`;
