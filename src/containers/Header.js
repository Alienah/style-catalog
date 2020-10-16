import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderComponent } from '../components/Header';

export const Header = () => {
  const styles = useSelector(state => state.handleStylesReducer.styles);
  return (
    <HeaderComponent styles={styles}/>
  )
};