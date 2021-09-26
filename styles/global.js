import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    position: relative;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  #__next {
    width: 100%;
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  p, h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0rem;
  }
  p, h1, h2, h3, h4, h5, h6, label {
    color: #4d4d4d;
  }
  button {
    cursor: pointer;
  }
`;
