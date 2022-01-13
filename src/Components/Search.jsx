import React, { useState } from "react";
import '../index.css';

function Search() {


  return <div className="container">
     <div className="search-content">
      <h1>Search</h1>
      <p>Not able to find your specific requirement? Just type your requirement below</p>
        <div className="search-input">
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
