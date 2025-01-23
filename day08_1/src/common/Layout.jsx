import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainCon = styled.main``;

const Layout = () => {
    return (
        <div>
            {/* 고정 : 헤더*/}
            <Header />
            <MainCon>
                {/* Routes 변경페이지 */}
                <Outlet />
            </MainCon>
            {/* 고정 : 푸터*/}
            <Footer />
        </div>
    );
};

export default Layout;
