// import Test1 from './components/Test1';
// import Test2 from './components/Test2';
// import Test3 from './components/Test3';
// import Test4 from './components/Test4';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Home from './page2/Home';
import About from './page2/About';
import Profile from './page2/Profile';
import NotFiles from './page2/NotFiles';
import Project from './page2/Project';
import './page2/style.css';
import NavBar from './page2/NavBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {/* 임폴트? */}
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/project">project</Link>
            </li>
          </ul>
        </nav>
        <NavBar />
        {/* 화면에 보이는 영역 = 페이지 불러오기 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/** <Route path="/경로, 상대, 절대" element = {컴포넌트}>{<About />} />
          <Route path="/Profile" element{< />}/>
 * <Route path="/경로, 상대, 절대" element = {컴포넌트}>
 * </Route>
 *
 * <Route>
 *  <Route/>
 *  <Route/>
 * </Route>
 *
 */
