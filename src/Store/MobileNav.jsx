import React from 'react';
import './store2.js'

function MobileNav() {



  return (
    <div className="mobile-outer">
      <nav className="Mobile-nav">
        <div>
          <div className="mobile-hamb">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-items">
              <div>About us</div>
              <div>About us</div>
              <div>About us</div>
              <div>About us</div>
            </div>
          </div>
        </div>

        <h1>Plantae.</h1>
        <div><i className="fas fa-shopping-cart">  0</i></div>
      </nav>
      <div className="mobile-search ">
        <div className="mobile-search_bar">
          <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div></div>
    </div>
  )
}

export default MobileNav;