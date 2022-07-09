import React from 'react';
import './Search.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


function Search(){
  return( 
    <div className="search_container">
      <div className="search_dropdown">
        <FaMapMarkerAlt className="search_icon_map"/>
        <p>Aracaju, SE</p>
        <IoIosArrowDown className="search_icon_arrow"/>
      </div>
      <div>
        <button className="search_button">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

export default Search;