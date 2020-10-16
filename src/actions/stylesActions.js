export const FETCH = 'FETCH';
export const SEARCH = 'SEARCH';
export const HIDE = 'HIDE';
export const LOADING_STYLES = 'LOADING_STYLES';
export const LOADING_NOT_VISIBLE = 'LOADING_NOT_VISIBLE';

function setProducts(products) {
  return ({
    type: FETCH,
    payload: {
      products,
    }
  })
}

function searchProductStyles(value) {
  return ({
    type: SEARCH,
    payload: {
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

export function onFetchProducts() {
  return (dispatch) => {
    dispatch(loadingStyles());
    fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((products) => dispatch(setProducts(products)))
    .catch((error) => console.log('Error trying to fetch data: ', error))
  }
}

export function onSearchProductStyles(value) {
  return (dispatch) => {
    dispatch(loadingStyles());
    dispatch(searchProductStyles(value));
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