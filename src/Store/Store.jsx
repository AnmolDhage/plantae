import React from 'react';
import StoreNav from './StoreNav.jsx';
import './Store.css';
const axios = require('axios').default;


function Store() {
  let [data, setData] = React.useState([]);

  window.onload = function () {
    axios.get('/api/1234')
      .then(function (response) {
        // handle success
        setData(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
