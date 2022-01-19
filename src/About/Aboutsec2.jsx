import React from 'react';

function Aboutsec2() {
  return (
    <section id="about2" className="about2">
      <div className="c_container flex aboutSec2">
        <h1 className="title">
          <span className="zero">0</span><span className="one">1</span>
        </h1>

        <div className="sec2Content">
          <h2 className="subHeader">
            India's First Online Nursery.
          </h2>
          <br />
          <p className="paraFont">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo, sequi dolor at adipisci quia fuga sed consequatur sunt? Architecto voluptatem neque delectus rerum cumque!
          </p>
        </div>

        <div className="grid grid-4">
          <div>
            <img className="sec2gridi" src="./Images/sec2_1.png" alt=""/>
            <div className="sec2gridc">
                <div className="">
                <h3 className="paraFont">
                  <b>Largest Online Nursery</b>
                </h3>
                <p className="paraFont">
                  1.2 Million plant lovers<br /> connected with us
                </p>
              </div>
            </div>
          </div>

          <div>
            <img className="sec2gridi" src="./Images/sec2_2.png" alt=""/>
            <div className="sec2gridc">
              <div className="">
                <h3 className="paraFont">
                  <b>All India Delivery</b>
                </h3>
                <p className="paraFont">
                  Delivering greenery<br /> across India
                </p>
              </div>
            </div>
          </div>

          <div>
            <img className="sec2gridi" src="./Images/sec2_3.png" alt=""/>
            <div className="sec2gridc">
              <div className="">
                <h3 className="paraFont">
                  <b>Secure Shipping</b>
                </h3>
                <p className="paraFont">
                  Diligent care taken to<br /> deliver healthy plants
                </p>
              </div>
            </div>
          </div>

          <div>
            <img className="sec2gridi" src="./Images/sec2_4.png" alt=""/>
            <div className="sec2gridc">
              <div className="">
                <h3 className="paraFont">
                  <b>Lifetime Support</b>
                </h3>
                <p className="paraFont">
                  We help you grow your<br /> garden for lifetime
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Aboutsec2;
