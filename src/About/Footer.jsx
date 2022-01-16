import React from "react";


function Footer(){
    return (
        <section id="footer" className="footer smallFont">
          <footer>

            <div className="container">
              <div className="grid c_row">
              <div className="c_col">
                  <ul>
                      <h4>Useful Knowlegde</h4>
                      <a href="#" ><li>Feed - GIY Gc_row Your Self</li></a><br />
                      <a href="#" ><li>Feed - Learn how to properly plant a seed</li></a><br />
                      <a href="#" ><li>Feed - Top 10 plants</li></a><br />
                      <a href="#" ><li>Feed - Kitchen Gardening</li></a>
                  </ul>
              </div>
              <div className="c_col">
                  <ul>
                      <h4>Useful Links</h4>
                      <a href="#" ><li>Contact Us</li></a><br />
                      <a href="#" ><li>FAQ's</li></a><br />
                      <a href="#" ><li>Privacy Policy</li></a><br />
                      <a href="#" ><li>Refund Policy</li></a><br />
                      <a href="#" ><li>Shipping Policy</li></a><br />
                      <a href="#" ><li>Terms of Service</li></a><br />
                  </ul>
              </div>
              <div className="c_col">
                  <h4>Follow Us</h4>
                    <div className="socials">
                      <a href="#"><i class="fab fa-github fa-2x"></i></a>
                      <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                      <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                      <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                    </div>
              </div>

              </div>
              <img className="plantaeBottom" src="./Images/Group 66.png" alt="..."/>

              <div className="c_row">
                  <p>Copyright &copy; 2021 Plantae</p>
              </div>
            </div>

          </footer>
        </section>
    );
}

export default Footer;
