import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './containers/Header';
import { ProductCardsList } from './containers/ProductCardsList';

function App() {
  const loadingNotVisible = useSelector((state) => state.handleStylesReducer.loadingNotVisible);
  const loadingStyles = useSelector((state) => state.handleStylesReducer.loadingStyles);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      { 
        loadingNotVisible || loadingStyles
        ? <div>{ loadingStyles ? "We're searching the styles" : "We're hiding the styles" }</div>
        : <ProductCardsList />
      }
    </div>
  );
}

export default App;
