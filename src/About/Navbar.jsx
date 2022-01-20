import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="header" className="primary-header">
      <nav>
        <ul className="primary-navigation nav-flex">
          <li>
            <a>
              <Link to="/">About us</Link>
            </a></li>
          <li >
            <a>
              <Link to="/store">Store</Link>
            </a></li>
          <li>
            <a>Sign-In</a>
          </li>
        </ul>

      </nav>

    </div>
  )
}

export default Navbar;