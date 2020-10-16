import React from 'react';
import { CheckboxContainer, Checkbox, CheckboxSpan, ImageContainer, NameContainer, NotVisibleTag, ValueContainer, StatisticsContainer, TagContainer } from './styles';

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