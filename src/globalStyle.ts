import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 15px 'Roboto', sans-serif;
    background: #fafafa;
    color: #aaa;
    -webkit-font-smoothing: antialiased !important;
  }
  div{
    display:flex;
    flex-direction:column;
  }
  ul {
    list-style: none;
  }
`
