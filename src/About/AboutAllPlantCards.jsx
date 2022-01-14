import React from "react";
import PlantCard from './PlantCard';

function AboutAllPlantCards() {
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

export default AboutAllPlantCards;