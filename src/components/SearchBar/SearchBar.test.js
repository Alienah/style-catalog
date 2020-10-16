import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import {products} from '../../../api/products.json';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { SearchBarComponent } from './index';
import thunk from 'redux-thunk';

describe('SearchBarComponent', () => {
  const initialState = {
    products: products,
    searchValue: '',
    styles: []
  };
  const mockStore = configureStore([thunk])
  const store = mockStore(initialState);

  it('renders an input', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input).toBeInTheDocument();
  });

  it('has a initial value', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input.value).toBe('');
  });

  it('changes value of input', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input.value).toBe('');
    fireEvent.change(input,{target: {value: 'test'}});
    expect(input.value).toBe('test');
  });
})
