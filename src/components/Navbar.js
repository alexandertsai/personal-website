import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <button 
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={location.pathname === '/blog' ? 'active' : ''}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/books" 
              className={location.pathname === '/books' ? 'active' : ''}
              onClick={closeMenu}
            >
              Books
            </Link>
          </li>
          <li>
            <Link 
              to="/essays" 
              className={location.pathname === '/essays' ? 'active' : ''}
              onClick={closeMenu}
            >
              Essays
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;