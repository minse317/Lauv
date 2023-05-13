import { Link } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
          <img src={logo} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/song">Song</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar