import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    font-family: 'Ubuntu', sans-serif;
    outline: 0;
  };

  button {
    transition: filter .2s;
    border: none;
    background-color: transparent;
    cursor: pointer;
  };

  button:hover {
    filter: brightness(90%);
  };
`