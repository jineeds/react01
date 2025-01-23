// import Test1 from './components/Test1';
// import Test2 from './components/Test2';
// import Test3 from './components/Test3';
// import Test4 from './components/Test4';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Home from './page3/Home';
import About from './page3/About';
import Profile from './page3/Profile';
import NotFiles from './page3/NotFiles';
import Project from './page3/Project';
import './page2/style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ul>
          <li>
            <Link to="/" element={<Home />}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" element={<About />}>
              about
            </Link>
          </li>
          <li>
            <Link to="/profile" element={<Profile />}>
              profile
            </Link>
          </li>
        </ul>
        <hr />
        {/* 화면에 보이는 영역 = 페이지 불러오기 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 두번째  : 첫번째 내용과 동일하나, 묶어서 작성하는 것을 권장*/}
          <Route path="/profile">
            <Route index element={<Profile />} />
            {/* 인덱스가 프로필과 일치하면 프로필이 들어올것이고 */}
            <Route path=":name" element={<Project />} />
            {/* 프로필에 해당하는 이름들 프로젝트로 넘어갈것이다? */}
          </Route>
          {/* 첫번쨰  : 하나씩 설정해서 작성하는 방법*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:name" element={<Project />} />
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

/**       <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:name" element={<Project />} 
            <Route path="/profile/:사용자정의동적변수(이름은 내 마음)" element={<Project />}/> */
