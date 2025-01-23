import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ border: '1px solid #f00' }}>
      <h2> Profile page</h2>
      <ul>
        <li>
          <Link to="/profile/html">html</Link>
        </li>
        <li>
          <Link to="/profile/css">css</Link>
        </li>
        <li>
          <Link to="js">js</Link>
        </li>
        <li>
          <Link to="react">react</Link>
        </li>
        <li>
          <Link to="next">next</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
