import React, { useState } from 'react';
import { Form, Input, Button } from './styles';
import { useDispatch } from 'react-redux';
import { searchProductStyles } from '../../actions/searchActions.js';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProductStyles(searchValue))
  };

  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Button>+</Button>
      <Input data-testid="input" onChange={handleChange} placeholder="Prueba" value={searchValue} />
    </Form>
  );
};
