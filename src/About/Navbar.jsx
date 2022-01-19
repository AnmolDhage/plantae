import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="header" className="primary-header nav-flex">
      <nav>
        <ul id="primary-navigation" className="primary-navigation nav-flex">
          <li className="active">
             <Link to="/">About</Link>
          </li>
          <li >
             <Link to="/store">Store</Link>
          </li>
          <li>
            <a href="#">
              Sign In
            </a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
