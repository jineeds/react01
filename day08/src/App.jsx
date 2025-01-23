import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styled/reset';
import Layout from './common/Layout';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import Profile from './pages/profile/Profile';
import Todos from './pages/todos/Todos';
import Post from './pages/post/Post';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/post" element={<Post />} />
            <Route path="/user">
              <Route index element={<Home />} />
              {/* <Route path=":userID" element={<Home />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
