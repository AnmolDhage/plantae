import React from 'react';
import Rating from "../About/Rating";

function PlantCard(props) {
  return (
    
      <div className="plantCard-body smallFont">
        <div className="plantCard-img-body"><img className="plantCard-type-img" src={`./Images/${props.details.type}.png`} alt="plant" />
          <img className="plantCard-img" src={`./Images/${props.details.img}.png`} alt="plant" /></div>
        <div>
          <div>
            <h1 className="plantCard-title">{props.details.title}</h1>
            <h1 className="plantCard-Price">{props.details.price}</h1>
          </div>
          <div className="plantCard-info">
            <p>{props.details.content}</p>
            <p className='p-rating'><Rating value={props.details.rating} /></p>
          </div>
          <div className="plantCard-Add-to-cart-btn">
            <button type="button"> Add to Cart </button></div>
        </div>
      </div>

  )
}

export default PlantCard;
