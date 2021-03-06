import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { HeaderComponent } from './index';

describe('HeaderComponent', () => {
  const mockStore = configureStore()
  const store = mockStore();
  const mockProps = {
    styles: [ {
      "images": [
        {
          "url": "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/72/4369044800_1_1_1.jpg?ts=1579709905065",
          "format": "jpg"
        }
      ],
      "id": 42113479,
      "styleCode": "000",
      "styleName": "BASESTYLE",
      "reference": "C04369044800000-V2020",
      "visits": 75000,
      "sales": 0,
      "CTR": 0.56,
      "turnover": 16.3,
      "visible": true
    }, {
      "images": [
        {
          "url": "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/13/4369044800_1_1_1.jpg?ts=1582709555821",
          "format": "jpg"
        }
      ],
      "id": 46535585,
      "styleCode": "001",
      "styleName": "URBAN",
      "reference": "C04369044800001-V2020",
      "visits": 7000,
      "sales": 2350,
      "CTR": 0.26,
      "turnover": 15.1,
      "visible": false
    },],
  };

  it('should render a searchBar component', () => {
    const { container } = render(<Provider store={store}><HeaderComponent {...mockProps} /></Provider>);
    const searchBar = queryByTestId(container, 'form');
    expect(searchBar).toBeInTheDocument();
  });

  it('should render a span with total of styles found', () => {
    const { container } = render(<Provider store={store}><HeaderComponent {...mockProps} /></Provider>);
    const totalStyles = queryByTestId(container, 'styles-total');
    expect(totalStyles).toBeInTheDocument();
    expect(totalStyles).toHaveTextContent(/^2 Styles$/)
  });
})