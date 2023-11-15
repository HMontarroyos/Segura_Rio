import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;

  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kdam Thmor Pro', sans-serif;
  }

  p {
    font-family: 'Exo 2', sans-serif;
  }

  body {background-color:  white;}

`;
