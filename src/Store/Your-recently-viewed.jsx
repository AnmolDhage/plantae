import React from "react";
import './your-recently-viewed.css'
import RecentlyViewed from './RecentlyViewed';
import PlantCardStore from './PlantCardStore';


function YourRecentlyViewed(){
    const [,onclickclear] = React.useState()
    function clearRecentlyViewed(){
        onclickclear(RecentlyViewed.length=0)
    }
    return <div className="You-Recently-Viewed-Component">
    <div className="Your-Recently-Viewed-Heading-Class">Your Recently Viewed</div>
    <div class="Your-Recently-Viewed-Delete">
      <button type="submit "  onClick={clearRecentlyViewed}> <i class="far fa-trash-alt"></i> Clear Recently Viewed</button>
    </div>
    <div className='yourRecentlyViewedDataComponent'>
        {RecentlyViewed.map((product) => {
            return(
                <PlantCardStore
              key={product._id}
              details={product.details}
            />
            )
            })}
    </div>
    </div>
}
export default YourRecentlyViewed;