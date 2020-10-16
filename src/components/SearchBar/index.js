import React from 'react';
import { Form, Image, Input, Button } from './styles';
import searchIcon from '../../assets/images/search.svg'

export const SearchBarComponent = ({onChange, onSubmit, searchValue}) => {
  return (
    <Form data-testid="form" onSubmit={onSubmit}>
      <Button><Image src={searchIcon} alt="search icon" /></Button>
      <Input data-testid="input" type="text" onChange={onChange} placeholder="XXXXXXXXXXX-V2020" value={searchValue} maxlength="70"/>
    </Form>
  );
};
