import React from 'react';
import { SearchBar } from '../../containers/SearchBar';
import { HeaderStyle, UserContainer, UserSpan, TotalSpan } from './styles';
import ArrowDown from '../../assets/images/arrow-down.svg';

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
