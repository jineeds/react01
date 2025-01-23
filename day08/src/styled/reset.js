import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans KR";  
  }
  button {
    padding:5px 10px; margin-right:5px;
    font-size:18px;
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

  img {
    vertical-align:top;
  }
    

  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


 .inner {
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        padding: 100px 0;
        h2 {
        font-size: 40px;
        margin-bottom: 40px;
        font-weight: bold;
    }
    }


`;

export default GlobalStyle;
