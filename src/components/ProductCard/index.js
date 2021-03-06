import React from 'react';
import { CheckboxContainer, Checkbox, CheckboxSpan, ImageContainer, NameContainer, NotVisibleTag, ValueContainer, StatisticsContainer, TagContainer } from './styles';
import PropTypes from 'prop-types';

export const ProductCard = (props) => {
  const { images, id, styleCode, styleName, visits, sales, CTR, turnover, visible, onChange } = props;

  return (
  <div>
    <ImageContainer data-testid="image-container" url={images[0].url}>
      <CheckboxContainer>
        <Checkbox data-testid="checkbox" type="checkbox" onChange={onChange} id={id}/>
        <CheckboxSpan></CheckboxSpan>
      </CheckboxContainer>
      <StatisticsContainer>
        <ValueContainer data-testid="sales-value">{sales}€</ValueContainer>
        <TagContainer data-testid="sales-tag">Sales</TagContainer>
        <ValueContainer data-testid="visits-value">{visits}</ValueContainer>
        <TagContainer data-testid="visits-tag">Visits</TagContainer>
        <ValueContainer data-testid="ratio-value">{CTR}%</ValueContainer>
        <TagContainer data-testid="ratio-tag">Conv.ratio</TagContainer>
        <ValueContainer data-testid="turnover-value">{turnover}d</ValueContainer>
        <TagContainer data-testid="turnover-tag">Turnover</TagContainer>
        {!visible ? <NotVisibleTag data-testid="not-visible-tag">NOT VISIBLE</NotVisibleTag> : ''}
      </StatisticsContainer>
    </ImageContainer>
    <NameContainer data-testid="name-container">{styleCode} - {styleName}</NameContainer>
  </div>
  )
}

ProductCard.propTypes = {
  CTR: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      format: PropTypes.string,
      url: PropTypes.string
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  sales: PropTypes.number.isRequired,
  styleCode: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  turnover: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  visits: PropTypes.number.isRequired,
}