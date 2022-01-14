import React, { useState } from "react";

function Search() {


  return <div className="">
     <div className="search-content">
      <h1 className="subHeader">Search</h1>
      <p className="paraFont">Not able to find your specific requirement? Just type your requirement below</p>
        <div className="search-input paraFont">
           <input type="text"
           className="searchBar"
           name="searchTerm"
           placeholder="What are you looking for?"
           autoComplete="off" />
           <button type="submit" className="searchButton">
             <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
  </div>;
}

export default Search;
