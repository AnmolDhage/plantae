import React from 'react';
import StoreNav from './StoreNav.jsx';
import './Store.css';

function Store() {
  let [data, setData] = React.useState([]);

  window.onload = function () {
    fetch('/api/1234')
      .then(res => res.json())
      .then(data1 => setData(data1));
  };

  React.useEffect(() => {
      console.log(data);
  }, [data]);
  return (
    <div>
      <StoreNav />
    </div>
  )
}

export default Store;
