import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from '../SearchBar';
import { HeaderStyle, UserContainer, UserSpan, TotalSpan } from './styles';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const Header = () => {
  const styles = useSelector(state => state.searchStylesReducer.styles);

  return (
  <HeaderStyle>
    <UserContainer>
      <UserSpan>Jose López López</UserSpan>
      <img src={ArrowDown} className="App-logo" alt="logo" />
    </UserContainer>
    <SearchBar/>
    <TotalSpan>{styles.length} Styles</TotalSpan>
  </HeaderStyle>
)};
