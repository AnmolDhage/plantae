import React from 'react';
import StoreNav from './StoreNav';
import ProductCard from './ProductCard';
import Banner from './Banners.jsx';
import YourRecentlyViewed from './Your-recently-viewed';

function Store() {
  return (
    <div>
      <StoreNav />
      <ProductCard />
      <Banner />
      <YourRecentlyViewed />
    </div>
  )
}

export default Store;
