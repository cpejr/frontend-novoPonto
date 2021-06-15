import path from "path";
import { createGlobalStyle } from "styled-components";
import { generateTheme } from "antd-theme-generator";

// Tema do ant design
if (true) require("./compiled/antdDark.css");
else require("./compiled/antdLight.css");

const options = {
  antDir: path.join(__dirname, "./node_modules/antd"),
  stylesDir: path.join(__dirname, "./src"), // all files with .less extension will be processed
  varFile: path.join(__dirname, "./src/styles/mainDark.less"), // default path is Ant Design default.less file
  themeVariables: ["@primary-color"],
  outputFilePath: path.join(__dirname, "./public/color.less"), // if provided, file will be created with generated less/styles
};

generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully", less);
  })
  .catch((error) => {
    console.log("Error", error);
  });

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

  .autoComplete {

    .ant-dropdown-menu {
      max-height: 250px;
      overflow: auto;
    }

    ::-webkit-scrollbar {
      width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      width: 5px;
      background: #fff;
      border-radius: 10px;
    }      
  }
`;

export default GlobalStyle;
