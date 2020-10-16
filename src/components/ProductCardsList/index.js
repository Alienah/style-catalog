import React from 'react';
import { ProductCard } from '../ProductCard';
import { Button, Container, List, Title, Wrapper } from './styles';
import eyeIcon from '../../assets/images/eye.svg';

// 04369248800-V2020, 04369248801-V2020

export const ProductCardsListComponent = ({ buttonVisible, searchValue, styles, onChange, onClick}) => (
  <Wrapper>
    <Container>
      { searchValue && <Title data-testid="title">{searchValue}</Title> }
      { styles.length > 0 &&
        <List data-testid="list">
          {styles.map((style) => (
            <li key={style.id} data-testid="item"><ProductCard {...style} onChange={onChange}/></li>
          ))}
        </List>
      }
      {
        buttonVisible && <Button data-testid="button" type="button" aria-label="set selected items not visible" onClick={onClick}><img src={eyeIcon} alt="set selected items not visible icon" /></Button>
      }
    </Container>
  </Wrapper>
);

