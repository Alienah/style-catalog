import React from 'react';
import { ImageContainer, ValueContainer, TagContainer } from './styles';

export const ProductCard = (props) => {
  const { images, id, styleCode, styleName, visits, sales, CTR, turnover, visible, onChange } = props;
  // const data = {
  //   images: [
  //     {
  //       "url": "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/72/4369044800_1_1_1.jpg?ts=1579709905065",
  //       "format": "jpg"
  //     }
  //   ],
  //   id: 42113470,
  //   styleCode: "000",
  //   styleName: "BASESTYLE",
  //   reference: "C04369044800000-V2020",
  //   visits: 75000,
  //   sales: 0,
  //   CTR: 0.56,
  //   turnover: 16.3,
  //   visible: true,
  // }
  // const { images, id, styleCode, styleName, reference, visits, sales, CTR, turnover, visible } = data;

  return (
  <div>
    <ImageContainer data-testid="image-container" url={images[0].url}>
      <div>
        <input data-testid="checkbox" type="checkbox" onChange={onChange} id={id}/>
      </div>
      <div>
        <ValueContainer data-testid="sales-value">{sales}€</ValueContainer>
        <TagContainer data-testid="sales-tag">Sales</TagContainer>
        <ValueContainer data-testid="visits-value">{visits}</ValueContainer>
        <TagContainer data-testid="visits-tag">Visits</TagContainer>
        <ValueContainer data-testid="ratio-value">{CTR}%</ValueContainer>
        <TagContainer data-testid="ratio-tag">Conv.ratio</TagContainer>
        <ValueContainer data-testid="turnover-value">{turnover}d</ValueContainer>
        <TagContainer data-testid="turnover-tag">Turnover</TagContainer>
      </div>
      {!visible ? <div data-testid="not-visible-tag">NOT VISIBLE</div> : ''}
    </ImageContainer>
    <div data-testid="name-container">{styleCode} - {styleName}</div>
  </div>
  )
}