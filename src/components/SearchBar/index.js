import React from 'react';
import { Form, Input, Button } from './styles';

export const SearchBarComponent = ({onChange, onSubmit, searchValue}) => {
  return (
    <Form data-testid="form" onSubmit={onSubmit}>
      <Button>+</Button>
      <Input data-testid="input" onChange={onChange} placeholder="Prueba" value={searchValue} />
    </Form>
  );
};
