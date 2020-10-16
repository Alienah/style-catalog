import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import { ProductCard } from './index';

describe('ProductCard', () => {
  const mockProps = {
    images: [
      {
        "url": "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/72/4369044800_1_1_1.jpg?ts=1579709905065",
        "format": "jpg"
      }
    ],
    id: 42113479,
    styleCode: "000",
    styleName: "BASESTYLE",
    reference: "C04369044800000-V2020",
    visits: 75000,
    sales: 0,
    CTR: 0.56,
    turnover: 16.3,
    visible: true,
    onChange: () => {}
  }

  it('should render a background in image container', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const imageContainer = queryByTestId(container, 'image-container');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveAttribute('class');
    expect(imageContainer).toHaveStyle('background-image: url');
  });

  it('should render input type checkbox', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const checkbox = queryByTestId(container, 'checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should render an element with sales value', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const salesValue = queryByTestId(container, 'sales-value');
    expect(salesValue).toBeInTheDocument();
    expect(salesValue).toHaveTextContent(/^0€$/);
  });

  it('should render an element with sales title', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const salesTag = queryByTestId(container, 'sales-tag');
    expect(salesTag).toBeInTheDocument();
    expect(salesTag).toHaveTextContent(/^Sales$/);
  });

  it('should render an element with visits value', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const visitsValue = queryByTestId(container, 'visits-value');
    expect(visitsValue).toBeInTheDocument();
    expect(visitsValue).toHaveTextContent(/^75000$/);
  });

  it('should render an element with visits title', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const visitsTag = queryByTestId(container, 'visits-tag');
    expect(visitsTag).toBeInTheDocument();
    expect(visitsTag).toHaveTextContent(/^Visits$/);
  });

  it('should render an element with ratio value', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const ratioValue = queryByTestId(container, 'ratio-value');
    expect(ratioValue).toBeInTheDocument();
    expect(ratioValue).toHaveTextContent(/^0.56%$/);
  });

  it('should render an element with ratio title', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const ratioTag = queryByTestId(container, 'ratio-tag');
    expect(ratioTag).toBeInTheDocument();
    expect(ratioTag).toHaveTextContent(/^Conv.ratio$/);
  });

  it('should render an element with turnover value', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const turnoverValue = queryByTestId(container, 'turnover-value');
    expect(turnoverValue).toBeInTheDocument();
    expect(turnoverValue).toHaveTextContent(/^16.3d$/);
  });
  
  it('should render an element with turnover title', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const turnoverTag = queryByTestId(container, 'turnover-tag');
    expect(turnoverTag).toBeInTheDocument();
    expect(turnoverTag).toHaveTextContent(/^Turnover$/);
  });
  
  it('should render an element with a NOT VISIBLE text when the prop "visible" is false', () => {
    const propsWithVisibleFalse = {...mockProps};
    propsWithVisibleFalse.visible = false;
    const { container } = render(<ProductCard {...propsWithVisibleFalse} />);
    const notVisibleTag = queryByTestId(container, 'not-visible-tag');
    expect(notVisibleTag).toBeInTheDocument();
    expect(notVisibleTag).toHaveTextContent(/^NOT VISIBLE$/);
  });
  
  it('should NOT render an element with a NOT VISIBLE text when the prop "visible" is true', () => {
    const propsWithVisibleFalse = {...mockProps};
    propsWithVisibleFalse.visible = true;
    const { container } = render(<ProductCard {...propsWithVisibleFalse} />);
    const notVisibleTag = queryByTestId(container, 'not-visible-tag');
    expect(notVisibleTag).not.toBeInTheDocument();
  });
  
  it('should render an element with the style name and id', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    const nameContainer = queryByTestId(container, 'name-container');
    expect(nameContainer).toBeInTheDocument();
    expect(nameContainer).toHaveTextContent(/^000 - BASESTYLE$/);
  });
})