export const SEARCH = 'SEARCH';

export function searchProductStyles(value) {
  return ({
    type: SEARCH,
    payload: value
  })
}

// export function searchAsync(value) {
//   return (dispatch) => {
//     setTimeout(()=> {
//       dispatch(searchProductStyles(value));
//     }, 5000)
//   }
// }