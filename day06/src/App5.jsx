import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Main from './page5/Main';
import Header from './page5/Header';
import Footer from './page5/Footer';
import './page5/style.css';
import About from './page5/About';
import Products from './page5/Products';
import ProductDetail from './page5/ProductDetail';
import NotFiles from './page5/Notfiles';
import Board from './page5/Board';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/products' element={<Products />} /> */}
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":productID" element={<ProductDetail />} />
          </Route>
          <Route path="/board" element={<Board />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
