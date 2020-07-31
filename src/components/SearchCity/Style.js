import styled from 'styled-components';

export const SearchInput = styled.input`
  border: none;
  width: 50%;
  border-radius: 20px;
  height: 35px;
  padding-top: 4px;
  padding-left: 35px;
  font-size: 18px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;

  &:focus {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.14);
  }
  &::placeholder {
    color: lightgray;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 0;
  form {
    display: block;
    position: relative;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const Icon = styled.span`
  position: absolute;
  color: lightgray;
  top: 25%;
  margin-left: 10px;
`;
