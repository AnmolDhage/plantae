import React from "react";
import './your-recently-viewed.css'
import yourRecentlyViewedData from './You-Recently-Viewed-data';
// import PlantCard from '../About/PlantCard';
import YourRecentlyViewedItemAdd from './You-Recently-Viewed-item-add';
function DisplayRecentlyViewed(item){
    return <YourRecentlyViewedItemAdd 
     title={item.title}
     price={item.price}
     description={item.description}
     rating={item.rating}
     num={1}
    type={'Balcony_Plants'}
     />
}
function YourRecentlyViewed(){
    const [,onclickclear] = React.useState()
    function clearRecentlyViewed(){
        onclickclear(yourRecentlyViewedData.length=0)
    }
    return <div className="You-Recently-Viewed-Component">
    <div className="Your-Recently-Viewed-Heading-Class">Your Recently Viewed</div>
    <div class="Your-Recently-Viewed-Delete">
      <button type="submit "  onClick={clearRecentlyViewed}> <i class="far fa-trash-alt"></i> Clear Recently Viewed</button>
    </div>
    <div className='yourRecentlyViewedDataComponent'>
        {yourRecentlyViewedData.map(DisplayRecentlyViewed)}
    </div>
    </div>
}
export default YourRecentlyViewed;