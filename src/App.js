import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inicio
        </p>
      </header>
    </div>
  );
}

export default App;
