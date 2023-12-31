'use client'
import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
  :root {
    /* dark theme color default */
    --bg: #3b3b3b;
    --bgBox: #404040;
    --bgBoxHighlighted: #505050;
    --primary: #31AAAA;
    --colorBorder: #797979;
    --colorBorderHighlighted: #898989;
    --colorText: #FCFCFC;
    --colorTextProminently: #31AAAA;
    --colorTextNotHighlighted: #B4ADC7;

    --border-radius: 8px;
    
  //  breakpoints
    --breakpoint-sm: "640px";
    --breakpoint-md: "768px";
    --breakpoint-lg: "1024px";
    --breakpoint-xl: "1280px";
    --breackpoint-2xl: "1536px";
  }

  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: var(--bg);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default GlobalStyles;
