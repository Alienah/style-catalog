import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './containers/Header';
import { ProductCardsList } from './containers/ProductCardsList';
import { Content } from './styles/AppStyles';

function App() {
  const loadingNotVisible = useSelector((state) => state.handleStylesReducer.loadingNotVisible);
  const loadingStyles = useSelector((state) => state.handleStylesReducer.loadingStyles);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Content>
        { 
          loadingNotVisible || loadingStyles
          ? <div>{ loadingStyles ? "We're searching the styles" : "We're hiding the styles" }</div>
          : <ProductCardsList />
        }
      </Content>
    </div>
  );
}

export default App;
