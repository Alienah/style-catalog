import { FETCH, SEARCH, HIDE, LOADING_STYLES, LOADING_NOT_VISIBLE } from '../actions/stylesActions';

const initialState = {
  products: [],
  searchValue: '',
  notVisibleProducts: [],
  styles: [],
  loadingStyles: false,
  loadingNotVisible: false,
  notFound: false
};

function getStyles(valuesList, products) {
  let notFound;
  const styles = valuesList.reduce((acc, val) =>{ 
    const itemIncluded = products.find((item) => {
      return item.product.includes(val);
    })
    if (!itemIncluded) {
      notFound = true;
      return [...acc]
    };
    const { styles } = itemIncluded;
    return [...acc, ...styles];
  }, []);
  return {styles, notFound}
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
    case FETCH : {
      const { products } = action.payload;
      return { ...state, products, loadingStyles: false};
    }
    case SEARCH : {
      const regExp = /\s*,\s*/;
      const { searchValue } = action.payload;
      const valuesList = searchValue.split(regExp);
      let styles = [...state.styles];
      let notFound;
      if (!searchValue) {
        styles = [];
        notFound = false;
      }
      else {
        try {
          const result = getStyles(valuesList, state.products);
          styles = result.styles;
          notFound = result.notFound;
        } catch (error) {
          console.warn(error) 
          notFound = true;
        }
      }
      return { ...state, searchValue, styles, loadingStyles: false, notFound};
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