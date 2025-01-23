import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-size: 25px;
    line-height: 1.6;
    font-family: "Noto Sans KR";
    margin:30px;
    font-weight: 700;
  }
  p,li {
    margin: 15px 0;
  }
  button  {
    width: 120px;
    height: 40px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
`;

export default GlobalStyle;
