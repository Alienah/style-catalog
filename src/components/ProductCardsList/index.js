import React from 'react';
import { ProductCard } from '../ProductCard';
import { Button, Container, Error, List, Title, Wrapper } from './styles';
import eyeIcon from '../../assets/images/eye.svg';
import PropTypes from 'prop-types';

export const ProductCardsListComponent = ({ buttonVisible, notFound, searchValue, styles, onChange, onClick}) => (
  <Wrapper>
    <Container>
      { searchValue && <Title data-testid="title">{searchValue}</Title> }
      { notFound && <Error>One or more entries did not return search results</Error>}
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

ProductCardsListComponent.propTypes = {
  buttonVisible: PropTypes.bool,
  notFound: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  searchValue: PropTypes.string,
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      CTR: PropTypes.number,
      id: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          format: PropTypes.string,
          url: PropTypes.string
        }),
      ),
      reference: PropTypes.string,
      sales: PropTypes.number,
      styleCode: PropTypes.string,
      styleName: PropTypes.string,
      turnover: PropTypes.number,
      visible: PropTypes.bool,
      visits: PropTypes.number,
    }),
  ).isRequired,
}

