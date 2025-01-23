// import Test1 from './components/Test1';
// import Test2 from './components/Test2';
// import Test3 from './components/Test3';
// import Test4 from './components/Test4';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';
import Main from './page4/Main';
import Member from './page4/Member';
import MemberDetail from './page4/MemberDetail';
import NotFiles from './page4/NotFiles';

const App = () => {
  return (
    <>
      {/* 브라우저라우터는 꼭 써야함 */}
      <BrowserRouter>
        <GlobalStyle />

        <hr />
        {/* 화면에 보이는 영역 = 페이지 불러오기 */}
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/member" element={<Member />} />
          <Route path="/member/:meberID" element={<MemberDetail />} />
          이 내용과 밑에 내용과 동일한데 표현을 다르게 작성했을뿐  */}
          <Route path="/member">
            <Route index element={<Member />} />
            <Route path=":memberID" element={<MemberDetail />} />
            {/* 멤버의 주소가 들어갔을때 멤버에 해당하는 내용과 일치한 연결? */}
            {/* 멤버 아이디에 해당하는 값이 멤버 디테일에 연결될 것이다? */}
          </Route>
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
