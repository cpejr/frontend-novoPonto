import { createGlobalStyle } from "styled-components";
import "./compiled/antd.css"; // Tema do ant design

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: auto;
    width: auto;
    
    font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4{
    margin: 0;
  }
`;

export default GlobalStyle;
