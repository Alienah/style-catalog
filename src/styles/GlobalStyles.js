import { createGlobalStyle } from 'styled-components';
import { variables } from './Variables';

export const GlobalStyle = createGlobalStyle`
  ${variables}

  /* Reset styles */
  html {
    box-sizing: border-box;
    font-family: 'Inter', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: var(--light-color-40);
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
