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
`;

export default GlobalStyle;
