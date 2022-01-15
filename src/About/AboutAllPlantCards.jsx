import React from "react";
import PlantCard from './PlantCard';

function AboutAllPlantCards() {
  return (
    <section id="plantCard" className="plantCard">
      <div className="container">
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
      </div>
    </section>
  )
}

export default AboutAllPlantCards;
