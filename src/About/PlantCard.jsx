import React from 'react';
import Rating from './Rating.jsx';

function PlantCard(props) {
  return (

      <div className="plantCard-body">
        <div className="plantCard-img-body"><img className="plantCard-type-img" src={`./Images/${props.type}.png`} alt="plant" />
          <img className="plantCard-img" src={`./Images/${props.img}.png`} alt="plant" /></div>
        <div>
          <div>
            <h1 className="plantCard-title">{props.title}</h1>
            <h1 className="plantCard-Price">{props.price}</h1>
          </div>
          <div className="plantCard-info">
            <p>{props.content}</p>
          </div>
          <div className="plantCard-Add-to-cart-btn">
            <Rating value={props.rating} />
            <button type="button"> Add to Cart </button></div>
        </div>
      </div>

  )
}

export default PlantCard;
