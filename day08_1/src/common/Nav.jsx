import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavCon = styled.nav`
    ul {
        display: flex;
        li {
            margin-left: 80px;
            a {
                font-size: 20px;
                font-weight: 700;
                color: #fff;
            }
        }
    }
`;
const Nav = () => {
    return (
        <NavCon>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/movie">Movie</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </NavCon>
    );
};

export default Nav;
