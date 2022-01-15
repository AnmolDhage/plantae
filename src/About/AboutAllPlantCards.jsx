import React, { useState } from 'react';
import PlantCard from './PlantCard';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutAllPlantCards() {

  let [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    console.log(width);
  });
  if (width > 1200) {

    return (
      <div className="AboutAllPlantCards">
        <PlantCard
          num={1}
          type={'Balcony_Plants'}
        />
        <PlantCard
          num={3}
          type={'Corporate_Plants'}
        />
        <PlantCard
          num={4}
          type={'Desktop_Plants'}
        />
        <PlantCard
          num={1}
          type={'Fancy_Plants'}
        />
      </div>
    )
  }

  else if (width <= 1200 && width > 900) {
    return (

      <Carousel>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
            <PlantCard
              num={3}
              type={'Corporate_Plants'}
            />
            <PlantCard
              num={4}
              type={'Desktop_Plants'}
            />

          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
            <PlantCard
              num={3}
              type={'Corporate_Plants'}
            />
            <PlantCard
              num={4}
              type={'Desktop_Plants'}
            />

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
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
            <PlantCard
              num={3}
              type={'Corporate_Plants'}
            />

          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
            <PlantCard
              num={3}
              type={'Corporate_Plants'}
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
            <PlantCard
              num={3}
              type={'Corporate_Plants'}
            />
          </div>

        </Carousel.Item>
      </Carousel>

    )
  }
  else if (width <= 650) {
    return (

      <Carousel>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="AboutAllPlantCards">
            <PlantCard
              num={1}
              type={'Balcony_Plants'}
            />
          </div>

        </Carousel.Item>
      </Carousel>

    )

  }
}
export default AboutAllPlantCards;
