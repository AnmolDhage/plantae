import React from 'react';

function Navbar() {
  return (
    <div id="header" className="primary-header nav-flex">
      <nav>
        <ul id="primary-navigation" className="primary-navigation nav-flex">
          <li className="active">
            <a href="index.html">
              About
            </a></li>
          <li >
            <a href="#">
              Store
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