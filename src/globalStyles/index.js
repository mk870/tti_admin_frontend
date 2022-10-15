import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-size: 10px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    body {
        height: 100vh;
        margin: 0;
        padding:0 ;
    }

    div, input, button {
        font-size: 14px;
    }
  `;
