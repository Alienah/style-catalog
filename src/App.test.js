/* global test, expect */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {products} from '../api/products.json';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import thunk from 'redux-thunk';

xtest('renders initial text', () => {
  const initialState = {
    products: products,
    searchValue: '',
    styles: []
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const pElement = getByText(/Inicio/i);
  expect(pElement).toBeInTheDocument();
});
