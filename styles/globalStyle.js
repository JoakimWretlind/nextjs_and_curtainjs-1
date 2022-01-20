import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'poppins', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }

    // For CurtainEffect
    .curtains-canvas{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .simplePlane {
      position: absolute;
      top: 15vh;
      right: 25%;
      bottom: 15vh;
      left: 25%;
      pointer-events: none;
    }
    .simplePlane img {
      display: none;
      object-fit: cover;
    }
`;