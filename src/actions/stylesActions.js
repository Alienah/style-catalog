import productsResponse from '../assets/data/products.json';

export const SEARCH = 'SEARCH';
export const HIDE = 'HIDE';
export const LOADING_STYLES = 'LOADING_STYLES';
export const LOADING_NOT_VISIBLE = 'LOADING_NOT_VISIBLE';

function searchProductStyles(products, value) {
  return ({
    type: SEARCH,
    payload: {
      products,
      searchValue: value,
    }
  })
}

function updateNotVisibleStyles(value) {
  return ({
    type: HIDE,
    payload: value
  })
}

function loadingStyles() {
  return {
    type: LOADING_STYLES
  }
}

function loadingNotVisible() {
  return {
    type: LOADING_NOT_VISIBLE
  }
}

export function onSearchProductStyles(value) {
  return (dispatch) => {
    dispatch(loadingStyles());
    setTimeout(()=> {
      const products = productsResponse;
      dispatch(searchProductStyles(products, value));
    }, 2000)
  }
}

export function onUpdateNotVisibleStyles(value) {
  return (dispatch) => {
    dispatch(loadingNotVisible());
    setTimeout(()=> {
      dispatch(updateNotVisibleStyles(value));
    }, 2000)
  }
}