import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;