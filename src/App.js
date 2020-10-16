import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './containers/Header';
import { Spinner } from './components/Spinner';
import { ProductCardsList } from './containers/ProductCardsList';
import { AppContainer, Content } from './styles/AppStyles';

// Start Mock Server in DEV
if (process.env.NODE_ENV === 'development') {
 const { server } = require('./api/workerSetup');
 server.start();
}

function App() {
  const loadingNotVisible = useSelector((state) => state.handleStylesReducer.loadingNotVisible);
  const loadingStyles = useSelector((state) => state.handleStylesReducer.loadingStyles);
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Content>
        { 
          loadingNotVisible || loadingStyles
          ? <Spinner loadingStyles={loadingStyles}/>
          : <ProductCardsList />
        }
      </Content>
    </AppContainer>
  );
}

export default App;
