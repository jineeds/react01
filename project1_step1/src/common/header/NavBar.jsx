import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useDispatch } from 'react-redux';
import { Music } from '../../pages';

const NavBar = () => {
  return (
    <>
      <NavWrap className="nav">
        <ul>
          <li>
            <Link to="/music">Music</Link>
          </li>
        </ul>
      </NavWrap>

      <TopMenu className="top-menu">
        <li>
          <Link to="/join">회원가입</Link>
        </li>

        {/* <li>
                    <Link to= '/logout' >로그아웃</Link>
                </li> */}

        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/artist">Artist</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/notice">Notice</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
      </TopMenu>
    </>
  );
};

export default NavBar;
