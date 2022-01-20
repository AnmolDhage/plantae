import React, { useState } from 'react';
import PlantCardStore from './PlantCardStore';
import Products from '../About/Products';
import "../StoreProductCard.css";


function ProductCard() {

  let [currentIndex, setCI] = useState(12);

  function loadMore(){
      var maxResult = 4;
        setCI(currentIndex += maxResult)
  }

  function hideAll(){
    setCI(12);
  }
    return (
        <section className='PlantCard' id='PlantCard'>
        <div id='products' className='grid'>


        {Products.slice(0,currentIndex).map((product) => {
          return <div className='flex' key={product._id}>
            <PlantCardStore
              key={product._id}
              details={product.details}
            />
          </div>
        })}
      
      </div>
      <div className='buttonSec'>
      <button id='lmButton' style={ currentIndex>=Products.length ? { display:'none'} : {display : 'inline'} } className='lmhaButton smallFont' onClick={loadMore}>Load More</button>
      <button id='haButton' style={ currentIndex===Products.length ? { display:'inline'} : {display : 'none'} } className='lmhaButton smallFont' onClick={hideAll}>Hide All</button>
      </div>
      </section>
    )
  }

export default ProductCard; 