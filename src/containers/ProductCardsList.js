import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdateNotVisibleStyles } from '../actions/stylesActions';
import { ProductCardsListComponent } from '../components/ProductCardsList';

export const ProductCardsList = () => {
  const searchValue = useSelector((state) => state.handleStylesReducer.searchValue);
  const styles = useSelector((state) => state.handleStylesReducer.styles);
  const notFound = useSelector((state) => state.handleStylesReducer.notFound);
  const dispatch = useDispatch();
  const [ notVisibleStyles, setNotVisibleStyles ] = useState([]);
  const [ buttonVisible, setButtonVisible ] = useState(false);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setButtonVisible(true);
      setNotVisibleStyles([...notVisibleStyles, e.target.id])
    } else {      
      var indexToRemove = notVisibleStyles.indexOf(e.target.id);
      notVisibleStyles.splice(indexToRemove, 1);
      setNotVisibleStyles( notVisibleStyles );
      if (notVisibleStyles.length === 0) setButtonVisible(false);
    }
  }

  const handleNotVisible = (e) => {
    e.preventDefault();
    dispatch(onUpdateNotVisibleStyles(notVisibleStyles));
  }
  return (
    <ProductCardsListComponent
      buttonVisible = {buttonVisible}
      searchValue = {searchValue}
      styles = {styles}
      onChange = { handleCheck }
      onClick = { handleNotVisible }
      notFound = {notFound}
    />
  )
}