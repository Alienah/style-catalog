import { SEARCH, HIDE, LOADING_STYLES, LOADING_NOT_VISIBLE } from '../actions/stylesActions';

const initialState = {
  products: [],
  searchValue: '',
  notVisibleProducts: [],
  styles: [],
  loadingStyles: false,
  loadingNotVisible: false,
};

function getStyles(valuesList, products) {
  return valuesList.reduce((acc, val) =>{ 
    const itemIncluded = products.find((item) => {
      return item.product.includes(val)
    })
    const { styles } = itemIncluded;
    return [...acc, ...styles];
  }, []);
}

function getStylesAfterSetNotVisible(styles, notVisibleProducts) {
  return styles.map((style) => {
    notVisibleProducts.forEach((item) => {
      if (style.id === Number(item)) {
        style.visible = false;
      }
      
    })
    return style;
  })
}

export default function handleStylesReducer(state = initialState, action)  {
  switch(action.type) {
    case SEARCH : {
      const regExp = /\s*,\s*/;
      const { products, searchValue } = action.payload;
      const valuesList = searchValue.split(regExp);
      const styles = getStyles(valuesList, products);
      return { ...state, products, searchValue, styles, loadingStyles: false};
    }
    case HIDE: {
      const notVisibleProducts = action.payload;
      const styles = getStylesAfterSetNotVisible(state.styles, notVisibleProducts)
      return { ...state, notVisibleProducts, styles, loadingNotVisible: false}
    }
    case LOADING_STYLES: {
      return { ...state, loadingStyles: true}
    }
    case LOADING_NOT_VISIBLE: {
      return { ...state, loadingNotVisible: true}
    }
    default: 
      return state;
  }
}