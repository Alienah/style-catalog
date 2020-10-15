import { SEARCH } from '../actions/searchActions';
import products from '../assets/data/products.json';

const initialState = {
  products: products,
  searchValue: '',
  styles: []
};

export default function searchStylesReducer(state = initialState, action)  {
  console.log('reducer', action)
  switch(action.type) {
    case SEARCH : {
      const searchValue  = action.payload;
      var regExp = /\s*,\s*/;
      const valuesList = searchValue.split(regExp);
      const {products} = state;

      // 04369248800-V2020, 04369248801-V2020
      const styles = valuesList.reduce((acc, val) =>{ 
        const itemIncluded = products.find((item) => {
          return item.product.includes(val)
        })
        const { styles } = itemIncluded;
        return [...acc, ...styles];
      }, [])  
      return { ...state, searchValue, styles};
    }
    default: 
      return state;
  }
}