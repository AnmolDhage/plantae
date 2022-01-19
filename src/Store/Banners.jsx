import React from 'react';
import './Banners.css';
import {Carousel, Caption, Item, Button} from 'react-bootstrap';

function Banner() {
  return <>

  <div className="banner_container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/BannerArtboard1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/BannerArtboard2.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/BannerArtboard3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>

  <div className="banner_container blog-grid">
     <div>
      <img src="./Images/Blog3.png" className="blog-img" />
      <div className="blog-text color-black">
        <h2>Water based plants</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Button variant="outline-dark">Buy Now</Button>
      </div>
     </div>
     <div>
      <img src="./Images/Blog1.png" className="blog-img" />
      <div className="blog-text color-white">
        <h2>Soil Supliments</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        <Button variant="outline-light">Buy Now</Button>
      </div>
     </div>
     <div>
      <img src="./Images/Blog2.png" className="blog-img" />
      <div className="blog-text color-white">
        <h2>G-I-Y</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        <Button variant="outline-light">Buy Now</Button>
      </div>
     </div>
  </div>
  </>;
}

export default Banner;
