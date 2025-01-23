import { Link } from 'react-router-dom';

import navList from './data';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [isShow, setIsShow] = useState(false);
  const onToggle = () => {
    setIsShow(!isShow);
  };
  //   close(x) 는 setIsShow 이용해서 해결

  return (
    <div className="navbar">
      <p className="all-menu" onClick={onToggle}>
        <FiMenu></FiMenu>
      </p>
      <nav className={isShow ? 'on' : ''}>
        {/* isshow가 true면 (3항연산자) */}
        <ul>
          {navList.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
          {/* <li>
            <Link to="/">홈</Link>
          </li> */}
        </ul>
        <p className="close" onClick={() => setIsShow(false)}>
          {/* false값을 전달을 해줘? 닫기 */}X
        </p>
      </nav>
    </div>
  );
};

export default NavBar;
