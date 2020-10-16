import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { onSearchProductStyles } from '../actions/stylesActions.js';
import { SearchBarComponent } from '../components/SearchBar';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onSearchProductStyles(searchValue));
  };
  
  return ( 
    <SearchBarComponent 
      onChange={handleChange}
      onSubmit={handleSubmit}
      searchValue={searchValue}
    />
  )
}