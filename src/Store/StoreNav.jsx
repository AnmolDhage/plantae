import React, { useState } from 'react';
import './Store.css';
import './Store.js';
import MobileNav from './MobileNav';
import { Link } from "react-router-dom";

function StoreNav() {
  let [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  if (width >= 750) {

    return (
      <div>
        <header>
          <span className="logo">Plantae</span>
          <div className="option-body ">
            <div className="list-dropdown" data-dropdown>
              <button className="list-grps nav-location" data-dropdown-button><i className="fas fa-map-marker-alt"></i> India</button>

              <div className="list-dropdown-menu information-grid">
                <form className="location-form">
                  <input type="text" placeholder=" Country"></input>
                </form>
              </div>
            </div>

          </div>
          <div className="search_bar">
            <input type="text" />
            <span><i className="fas fa-search"></i></span>
          </div>
          <nav className="web-nav">
            <div className="option-body">
              <i className="fav-icon fas fa-caret-down"></i>
              <div className="options">
                <span className="option_upper">Hello, Hardik</span>
                <span className="option_lower"
                >Account & Lists</span>
              </div>
            </div>
            <div className="options">
              <span className="option_upper">Returns</span>
              <span className="option_lower">& Orders</span>
            </div>

            <div className="basket">
              <span><i class="fas web fa-shopping-cart">  0</i></span></div>
          </nav>
        </header>

        <div className="list">
          <div className="list-grps About-Us"><a><Link to="/">About Us</Link></a></div>
          <div className="list-dropdown" data-dropdown>
            <button className="list-grps" data-dropdown-button>Categories</button>
            <div className="list-dropdown-menu information-grid">
              <div className="list-menu-items"><a href="#">Mosses</a></div>
              <div className="list-menu-items"><a href="#">Ferns</a></div>
              <div className="list-menu-items"><a href="#">Gymnosperms</a></div>
              <div className="list-menu-items"><a href="#">Angiosperms</a></div>
            </div>
          </div>
          <div className="list-grps">Offer Zone</div>
          <div className="list-grps">New Arrivals</div>
          <div className="list-grps Best-Sellers">Best Sellers</div>

          <div></div>
        </div>
      </div>
    )
  } else if (width < 750) {
    return (
      <MobileNav />
    )

  }

}

export default StoreNav;
