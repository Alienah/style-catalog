import React from 'react';
import { SearchBar } from '../../containers/SearchBar';
import { HeaderStyle, UserContainer, UserSpan, TotalSpan } from './styles';
import ArrowDown from '../../assets/images/arrow-down.svg';
import PropTypes from 'prop-types';

export const HeaderComponent = ({styles}) => {
  return (
  <HeaderStyle>
    <UserContainer>
      <UserSpan>Jose López López</UserSpan>
      <img src={ArrowDown} alt="arrow-down" />
    </UserContainer>
    <SearchBar data-testid="search-bar" />
    <TotalSpan data-testid="styles-total">{styles.length} Styles</TotalSpan>
  </HeaderStyle>
)};

HeaderComponent.propTypes = {
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
