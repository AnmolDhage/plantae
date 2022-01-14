import React from 'react';
import Navbar from './Navbar'


function Aboutsec1() {
  return (
    <section id="about" className="about">
      <Navbar />
      <div className="aboutSec1 flex">
        <h1 className="title">
          <span className="title-1">Plan</span><span className="title-2">tae.</span>
        </h1>
        <h2 className="subHeader aboutContent">
          Who are we?
          <p className="paraFont">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolorum fuga cum consequuntur aperiam repellat laudantium soluta facere recusandae mollitia, illum reiciendis eum consequatur, tempora.
          </p>
        </h2>
      </div>
    </section>
  )
}

export default Aboutsec1;
