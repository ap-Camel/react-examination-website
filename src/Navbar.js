import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function NavBar() {

  const user = useSelector(state => state.user);

  return(
      <header>
          <nav className="navbar">
              <div className="brand-title">Brand Name</div>
              {user.loggedIn && (
                <>
                  <a href="#" className="toggle-button" onClick={() => {
                  document.getElementsByClassName('navbar-links')[0].classList.toggle('active');
              }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </a>
              <div className="navbar-links">
                <ul>
                  <li><Link to="/" > home </Link></li>
                </ul>
              </div>
                </>
              )}

              {!user.loggedIn && <Link to="/login" replace={true} className="toggle-button" >Login</Link>}
              
          </nav>
      </header>
  );
}


export default NavBar;