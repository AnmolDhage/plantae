import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="header" className="primary-header nav-flex">
      <nav>
        <ul id="primary-navigation" className="primary-navigation nav-flex">
          <li className="active">
            <a>
              <Link to="/">About</Link>
            </a></li>
          <li >
            <a>
              <Link to="/store">Store</Link>
            </a></li>
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