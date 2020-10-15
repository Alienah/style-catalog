import React from 'react';
import logo from './logo.svg';
import {GlobalStyle} from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
