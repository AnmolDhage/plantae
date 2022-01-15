import React from 'react';

function PlantCard(props) {
  return (
    
      <div className="plantCard-body">
        <div className="plantCard-img-body"><img className="plantCard-type-img" src={`./Images/${props.type}.png`} alt="plant" />
          <img className="plantCard-img" src={`./Images/${props.num}.png`} alt="plant" /></div>
        <div>
          <div>
            <h1 className="plantCard-title">Monstera</h1>
            <h1 className="plantCard-Price">₹1900</h1>
          </div>
          <div className="plantCard-info">
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div className="plantCard-Add-to-cart-btn"><p>ratings 4.5  (8500)</p>
            <button type="button"> Add to Cart </button></div>
        </div>
      </div>

  )
}

export default PlantCard;
