import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styled/reset';
import Layout from './common/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import Post from './pages/post/Post';
import User from './pages/user/User';
import Movie from './pages/movie/Movie';
import Todos from './pages/todos/Todos';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/movie" element={<Movie />} />
                        <Route path="/todos" element={<Todos />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/user">
                            <Route index element={<User />} />
                            {/* <Route path=":userID" element={<Home />} /> */}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
