import React, { useState } from 'react';
import PlantCard from './PlantCard';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';

// Full screen: Top 4, 3-carousel: Top 6, 2-carousel: Top 6, 1-carousel: All 

function AboutAllPlantCards() {

  let [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  if (width > 1200) {

    return (
      <div className="AboutAllPlantCards">

        {Products.slice(0,4).map((product) => {
          return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
        })}
      </div>
    )
  }



  else if (width <= 1200 && width > 900) {
    return (

      <Carousel>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            {Products.slice(0,3).map((product) => {
              return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
            })}
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
          {Products.slice(3,6).map((product) => {
              return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
            })}
          </div>

        </Carousel.Item>
      </Carousel>

    )
  }
  else if (width <= 900 && width > 650) {
    return (

      <Carousel>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
          {Products.slice(0,2).map((product) => {
              return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
            })}
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
          {Products.slice(2,4).map((product) => {
              return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
            })}
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
          {Products.slice(4,6).map((product) => {
              return <>
            <PlantCard
              key={product.id}
              details={product.details}
            />
          </>
            })}
          </div>

        </Carousel.Item>
      </Carousel>

    )
  }
  else if (width <= 650) {
    return (

      <Carousel>
        {Products.map((product) => {
          return (
            <Carousel.Item>
              <div className="AboutAllPlantCards">
                <PlantCard
                  key={product.id}
                  details={product.details}
                />
              </div>
            </Carousel.Item>
          )
        })}

      </Carousel>

    )

  }
}
export default AboutAllPlantCards;
