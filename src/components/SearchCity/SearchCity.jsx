import React, { useRef } from 'react';

import { Search, SearchInput, Icon } from './Style';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInputValue } from '../../redux/actions/search';
import { fetchWeatherDataForCity } from '../../redux/actions/weather';
import { fetchForecastForCity } from '../../redux/actions/forecast';
import searchSvg from '../../assets/search-solid.svg';
const SearchCity = () => {
  const value = useSelector(({ search }) => search.value);
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleInputChange = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setSearchInputValue(''));
    dispatch(fetchWeatherDataForCity(value));
    dispatch(fetchForecastForCity(value));
    input.current.blur();
  };

  return (
    <Search>
      <form onSubmit={submitForm}>
        <Icon>
          {/* <i className='fa fa-search'></i> */}
          <img src={searchSvg} alt='search' width='15'/>
        </Icon>
        <SearchInput
          ref={input}
          placeholder='Введите название города'
          value={value}
          onChange={handleInputChange}
        />
      </form>
    </Search>
  );
};

export default SearchCity;
