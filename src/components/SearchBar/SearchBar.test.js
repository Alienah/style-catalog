import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { products } from '../../api/products.json';
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
  const props = {
    onChange: (e) => {return e.target.value},
    onSubmit: () => {}, 
  }

  it('renders an input', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent {...props} /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input).toBeInTheDocument();
  });

  it('has a initial value', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent {...props} /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input.value).toBe('');
  });

  it('should changes value of input with onChange', () => {
    const { container } = render(<Provider store={store}><SearchBarComponent {...props} /></Provider>);
    const input = getByTestId(container, 'input');
    expect(input.value).toBe('');
    let event = {
      target: {
        value: 'test'
      }
    }
    fireEvent.change(input, event )
    expect(input.value).toBe("test");
  });
})
