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
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/movie">movie</Link>
        </li>
        <li>
          <Link to="/todos">todos</Link>
        </li>
        <li>
          <Link to="/post">post</Link>
        </li>
      </ul>
    </NavCon>
  );
};

export default Nav;
