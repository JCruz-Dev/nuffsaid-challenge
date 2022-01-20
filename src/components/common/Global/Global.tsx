import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
const GlobalStyle = createGlobalStyle`
 ${normalize}
 *,::after,::before {
    box-sizing: border-box;
 }
  body {
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default GlobalStyle;
