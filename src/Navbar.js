import React from 'react';
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function NavBar() {

  const user = useSelector(state => state.user);
  const location = useLocation();

  function toogle() {
    document.getElementsByClassName('navbar-links')[0].classList.toggle('active');
  }

  return(
      <header>
          <nav className="navbar">
              <div className="brand-title">Brand Name</div>
              {user.loggedIn && (
                <>
                  <a href="#" className="toggle-button" onClick={toogle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </a>
                  <div className="navbar-links">
                    <ul onClick={toogle}>
                      <li><Link to="/"  state={{from: location}} replace={false} > home </Link></li>
                      {user.userRole === "teacher" && (
                        <>
                          <li><Link to="/teacher"  state={{from: location}} replace={false}> teacher </Link></li>
                        </>
                      )}
                      {user.userRole === "student" && (
                        <>
                          <li><Link to="/student"  state={{from: location}} replace={false}> student </Link></li>
                        </>
                      )}
                    </ul>
                  </div>
                </>
              )}

              {!user.loggedIn && <Link to="/login" state={{from: location}} replace={false} className="login-button" >Login</Link>}
              
          </nav>
      </header>
  );
}


export default NavBar;