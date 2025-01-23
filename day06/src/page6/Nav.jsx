import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/profile">프로필</Link>
                    </li>
                    <li>
                        <Link to="/project">프로젝트</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
