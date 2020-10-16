import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import { ProductCardsListComponent } from './index';

describe('ProductCardsList', () => {
  const mockProps = {
    buttonVisible: false,
    searchValue: '04369248800-V2020',
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
    },],
    onClick: () => {},
    onChange: () => {}
  };

  it('should render a title', () => {
    const { container } = render(<ProductCardsListComponent {...mockProps} />);
    const title = queryByTestId(container, 'title');
    expect(title).toBeInTheDocument();
  });

  it('should NOT render a title when no searchValue in props ', () => {
    const propsWithoutTitle = {...mockProps};
    propsWithoutTitle.searchValue = '';
    const { container } = render(<ProductCardsListComponent {...propsWithoutTitle} />);
    const title = queryByTestId(container, 'title');
    expect(title).not.toBeInTheDocument();
  });

  it('should render a list', () => {
    const { container } = render(<ProductCardsListComponent {...mockProps} />);
    const list = queryByTestId(container, 'list');
    expect(list).toBeInTheDocument();
  });

  it('should NOT render a list when no styles in props ', () => {
    const propsWithoutStyles = {...mockProps};
    propsWithoutStyles.styles = []
    const { container } = render(<ProductCardsListComponent {...propsWithoutStyles} />);
    const list = queryByTestId(container, 'list');
    expect(list).not.toBeInTheDocument();
  });

  it('should NOT render a button by default', () => {
    const { container } = render(<ProductCardsListComponent {...mockProps} />);
    const button = queryByTestId(container, 'button');
    expect(button).not.toBeInTheDocument();
  });

  it('should render a button when the buttonVisible prop is given', () => {
    const propsWithButtonVisible = {...mockProps};
    propsWithButtonVisible.buttonVisible = true;
    const { container } = render(<ProductCardsListComponent {...propsWithButtonVisible} />);
    const button = queryByTestId(container, 'button');
    expect(button).toBeInTheDocument();
  });
})