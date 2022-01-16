import React from 'react';
import '../StoreNav.css';
import { Link } from "react-router-dom";

function StoreNav() {
  return (
    <div>
      <header>
        <span className="logo">Plantae</span>
        <div className="option-body">
          <span><i className="fas fa-map-marker-alt"></i></span>
          <div className="options">
            <span className="option_upper">Udaipur</span>
            <span className="option_lower"
            >Rajashthan</span>
          </div>
        </div>
        <div className="search_bar">
          <input type="text" />
          <span><i className="fas fa-search"></i></span>
        </div>
        <nav>
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
            <span><i class="fas fa-shopping-cart">  0</i></span></div>
        </nav>
      </header>

      <div className="list">
        <div className="list-grps About-Us"><a><Link to="/">About Us</Link></a></div>
        <div className="list-grps ">Categories</div>
        <div className="list-grps">Offer Zone</div>
        <div className="list-grps">New Arrivals</div>
        <div className="list-grps Best-Sellers">Best Sellers</div>


      </div>
    </div >
  )
}

export default StoreNav;