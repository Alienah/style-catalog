import React from 'react';
import { ProductCard } from '../ProductCard';
import { List } from './styles';

// 04369248800-V2020, 04369248801-V2020
export const ProductCardsListComponent = ({ buttonVisible, searchValue, styles, onChange, onClick}) => (
  <div>
    { searchValue && <h2 data-testid="title">{searchValue}</h2> }
    { styles.length > 0 &&
      <List data-testid="list">
        {styles.map((style) => (
          <li key={style.id} data-testid="item"><ProductCard {...style} onChange={onChange}/></li>
        ))}
      </List>
    }
    {
      buttonVisible && <button data-testid="button" type="button" onClick={onClick}>Ocultar</button>
    }
  </div>
);

