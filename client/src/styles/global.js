import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  }
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #__next {
    display: flex;
    justify-content: center;
  }

  .btn-primary:hover {
    background: whitesmoke;
    color: black;
    border: 3px;
  }

  #root {
    position: relative;
    min-height: 100vh;
  }
`
